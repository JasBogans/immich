from typing import Any

from PIL import Image
from sentence_transformers import SentenceTransformer
from io import BytesIO
from ..schemas import ModelType
from .base import InferenceModel


class CLIPSTEncoder(InferenceModel):
    _model_type = ModelType.CLIP

    def load(self, **model_kwargs: Any) -> None:
        self.model = SentenceTransformer(
            self.model_name,
            cache_folder=self.cache_dir.as_posix(),
            **model_kwargs,
        )

    def _predict(self, image_or_text: Image.Image | bytes | str) -> list[float]:
        if isinstance(image_or_text, bytes):
            image_or_text = Image.open(BytesIO(image_or_text))
        return self.model.encode(image_or_text).tolist()
