import { DetectFaceResult, IMachineLearningRepository, MACHINE_LEARNING_URL, TextModelInput, VisionModelInput } from '@app/domain';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';
import { CLIPTextConfig, CLIPVisionConfig, ClassificationConfig, FacialRecognitionConfig, ModelConfig } from '../../domain/system-config/dto/system-config-machine-learning.dto';

const client = axios.create({ baseURL: MACHINE_LEARNING_URL });

@Injectable()
export class MachineLearningRepository implements IMachineLearningRepository {
  private post<T>(formData: FormData, endpoint: string): Promise<T> {
    return client.post<T>(endpoint, formData, { headers: formData.getHeaders() }).then((res) => res.data);
  }

  classifyImage(input: VisionModelInput, config: ClassificationConfig): Promise<string[]> {
    const formData = this.getFormData(input, config);
    formData.append('modelType', 'image-classification');
    formData.append('minScore', config.minScore.toString());
    return this.post<string[]>(formData, '/image-classifier/tag-image');
  }

  detectFaces(input: VisionModelInput, config: FacialRecognitionConfig): Promise<DetectFaceResult[]> {
    const formData = this.getFormData(input, config);
    formData.append('modelType', 'facial-recognition');
    formData.append('minScore', config.minScore.toString());
    return this.post<DetectFaceResult[]>(formData, '/facial-recognition/detect-faces');
  }

  encodeImage(input: VisionModelInput, config: CLIPVisionConfig): Promise<number[]> {
    const formData = this.getFormData(input, config);
    formData.append('modelType', 'clip');
    return this.post<number[]>(formData, '/sentence-transformer/encode-image');
  }

  encodeText(input: TextModelInput, config: CLIPTextConfig): Promise<number[]> {
    const formData = this.getFormData(input, config);
    formData.append('modelType', 'clip');
    return client.post<number[]>('/sentence-transformer/encode-text', { text: input }).then((res) => res.data);
  }

  getFormData(input: TextModelInput | VisionModelInput, config: ModelConfig): FormData {
    const formData = new FormData();

    formData.append('modelName', config.modelName)
    if ("imagePath" in input) {
      const fileStream = createReadStream(input.imagePath);
      formData.append('image', fileStream);
    } else {
      formData.append('text', input.text);
    }

    return formData;
  }
}
