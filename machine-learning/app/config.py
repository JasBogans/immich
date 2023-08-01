from pathlib import Path

from pydantic import BaseSettings

from .schemas import ModelType


class Settings(BaseSettings):
    cache_folder: str = "/cache"
    model_ttl: int = 0
    host: str = "0.0.0.0"
    port: int = 3003
    workers: int = 1
    test_full: bool = False

    class Config(BaseSettings.Config):
        env_prefix = "MACHINE_LEARNING_"
        case_sensitive = False


def get_cache_dir(model_name: str, model_type: ModelType) -> Path:
    return Path(settings.cache_folder, model_type.value, model_name)


settings = Settings()
