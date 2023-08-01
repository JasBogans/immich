from io import BytesIO
from typing import Any

from PIL import Image
from transformers.pipelines import pipeline

from ..schemas import ModelType
from .base import InferenceModel


class ImageClassifier(InferenceModel):
    _model_type = ModelType.IMAGE_CLASSIFICATION

    def load(self, min_score: float = 0.9, **model_kwargs: Any) -> None:
        self.min_score = min_score
        self.model = pipeline(
            self.model_type.value,
            self.model_name,
            model_kwargs={"cache_dir": self.cache_dir, **model_kwargs},
        )

    def _predict(self, image: Image.Image | bytes) -> list[str]:
        if isinstance(image, bytes):
            image = Image.open(BytesIO(image))
        predictions: list[dict[str, Any]] = self.model(image)  # type: ignore
        tags = [tag for pred in predictions for tag in pred["label"].split(", ") if pred["score"] >= self.min_score]

        return tags

    def configure(self, **model_kwargs: Any) -> None:
        self.min_score = model_kwargs.get("min_score", self.min_score)
