import {
  DetectFaceResult,
  IMachineLearningRepository,
  MACHINE_LEARNING_URL,
  TextModelInput,
  VisionModelInput,
} from '@app/domain';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';
import { ModelConfig } from '../../domain/system-config/dto/system-config-machine-learning.dto';

const client = axios.create({ baseURL: MACHINE_LEARNING_URL });

@Injectable()
export class MachineLearningRepository implements IMachineLearningRepository {
  private post<T>(input: TextModelInput | VisionModelInput, config: ModelConfig): Promise<T> {
    const formData = this.getFormData(input, config);
    return client.post<T>('/predict', formData, { headers: formData.getHeaders() }).then((res) => res.data);
  }

  classifyImage(input: VisionModelInput, config: ModelConfig): Promise<string[]> {
    return this.post<string[]>(input, config);
  }

  detectFaces(input: VisionModelInput, config: ModelConfig): Promise<DetectFaceResult[]> {
    return this.post<DetectFaceResult[]>(input, config);
  }

  encodeImage(input: VisionModelInput, config: ModelConfig): Promise<number[]> {
    return this.post<number[]>(input, config);
  }

  encodeText(input: TextModelInput, config: ModelConfig): Promise<number[]> {
    return this.post<number[]>(input, config);
  }

  getFormData(input: TextModelInput | VisionModelInput, config: ModelConfig): FormData {
    const formData = new FormData();
    const { modelName, modelType, ...options } = config;

    formData.append('modelName', modelName);
    formData.append('modelType', modelType);
    if (options) {
      formData.append('options', options);
    }
    if ('imagePath' in input) {
      const fileStream = createReadStream(input.imagePath);
      formData.append('image', fileStream);
    } else if ('text' in input) {
      formData.append('text', input.text);
    } else {
      throw new Error('Invalid input');
    }

    return formData;
  }
}
