from typing import Any

import cv2
from insightface.app import FaceAnalysis
import numpy as np

from ..schemas import ModelType
from .base import InferenceModel


class FaceRecognizer(InferenceModel):
    _model_type = ModelType.FACIAL_RECOGNITION

    def load(self, min_score: float = 0.7, **model_kwargs: Any) -> None:
        self.model = FaceAnalysis(
            name=self.model_name,
            root=self.cache_dir.as_posix(),
            allowed_modules=["detection", "recognition"],
            **model_kwargs,
        )
        self.model.prepare(
            ctx_id=0,
            det_thresh=min_score,
            det_size=(640, 640),
        )

    def _predict(self, image: cv2.Mat | bytes) -> list[dict[str, Any]]:
        if isinstance(image, bytes):
            image = cv2.imdecode(np.frombuffer(image, np.uint8), cv2.IMREAD_COLOR)
        assert isinstance(image, np.ndarray)
        height, width, _ = image.shape
        results = []
        faces = self.model.get(image)

        for face in faces:
            x1, y1, x2, y2 = face.bbox

            results.append(
                {
                    "imageWidth": width,
                    "imageHeight": height,
                    "boundingBox": {
                        "x1": round(x1),
                        "y1": round(y1),
                        "x2": round(x2),
                        "y2": round(y2),
                    },
                    "score": face.det_score.item(),
                    "embedding": face.normed_embedding.tolist(),
                }
            )
        return results

    def configure(self, **model_kwargs: Any) -> None:
        self.model.det_model.det_thresh = model_kwargs.get("min_score", self.model.det_model.det_thresh)
