import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';


export class ModelConfig {
  @IsString()
  @ApiProperty({ type: 'string' })
  modelName!: string;
}


export class ClassificationConfig extends ModelConfig {
  @IsNumber()
  @ApiProperty({ type: 'integer' })
  minScore!: number;
}


export class CLIPVisionConfig extends ModelConfig { }


export class CLIPTextConfig extends ModelConfig { }


export class FacialRecognitionConfig extends ModelConfig {
  @IsNumber()
  @ApiProperty({ type: 'integer' })
  minScore!: number;
}


export class SystemConfigMachineLearningDto {
  @ApiProperty({ type: ClassificationConfig })
  classification!: ClassificationConfig;

  @ApiProperty({ type: CLIPVisionConfig })
  clipVision!: CLIPVisionConfig;

  @ApiProperty({ type: CLIPTextConfig })
  clipText!: CLIPTextConfig;

  @ApiProperty({ type: FacialRecognitionConfig })
  facialRecognition!: FacialRecognitionConfig;
}
