import { CLIPTextConfig, CLIPVisionConfig, ClassificationConfig, FacialRecognitionConfig } from "../system-config/dto/system-config-machine-learning.dto";

export const IMachineLearningRepository = 'IMachineLearningRepository';

export interface VisionModelInput {
  imagePath: string;
}

export interface TextModelInput {
  text: string;
}

export interface BoundingBox {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface DetectFaceResult {
  imageWidth: number;
  imageHeight: number;
  boundingBox: BoundingBox;
  score: number;
  embedding: number[];
}

export interface IMachineLearningRepository {
  classifyImage(input: VisionModelInput, config: ClassificationConfig): Promise<string[]>;
  encodeImage(input: VisionModelInput, config: CLIPVisionConfig): Promise<number[]>;
  encodeText(input: TextModelInput, config: CLIPTextConfig): Promise<number[]>;
  detectFaces(input: VisionModelInput, config: FacialRecognitionConfig): Promise<DetectFaceResult[]>;
}
