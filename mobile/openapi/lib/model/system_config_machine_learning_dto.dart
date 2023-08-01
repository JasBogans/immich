//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.12

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class SystemConfigMachineLearningDto {
  /// Returns a new [SystemConfigMachineLearningDto] instance.
  SystemConfigMachineLearningDto({
    required this.classification,
    required this.clipVision,
    required this.clipText,
    required this.facialRecognition,
  });

  ClassificationConfig classification;

  CLIPVisionConfig clipVision;

  CLIPTextConfig clipText;

  FacialRecognitionConfig facialRecognition;

  @override
  bool operator ==(Object other) => identical(this, other) || other is SystemConfigMachineLearningDto &&
     other.classification == classification &&
     other.clipVision == clipVision &&
     other.clipText == clipText &&
     other.facialRecognition == facialRecognition;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (classification.hashCode) +
    (clipVision.hashCode) +
    (clipText.hashCode) +
    (facialRecognition.hashCode);

  @override
  String toString() => 'SystemConfigMachineLearningDto[classification=$classification, clipVision=$clipVision, clipText=$clipText, facialRecognition=$facialRecognition]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'classification'] = this.classification;
      json[r'clipVision'] = this.clipVision;
      json[r'clipText'] = this.clipText;
      json[r'facialRecognition'] = this.facialRecognition;
    return json;
  }

  /// Returns a new [SystemConfigMachineLearningDto] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static SystemConfigMachineLearningDto? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return SystemConfigMachineLearningDto(
        classification: ClassificationConfig.fromJson(json[r'classification'])!,
        clipVision: CLIPVisionConfig.fromJson(json[r'clipVision'])!,
        clipText: CLIPTextConfig.fromJson(json[r'clipText'])!,
        facialRecognition: FacialRecognitionConfig.fromJson(json[r'facialRecognition'])!,
      );
    }
    return null;
  }

  static List<SystemConfigMachineLearningDto> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <SystemConfigMachineLearningDto>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = SystemConfigMachineLearningDto.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, SystemConfigMachineLearningDto> mapFromJson(dynamic json) {
    final map = <String, SystemConfigMachineLearningDto>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = SystemConfigMachineLearningDto.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of SystemConfigMachineLearningDto-objects as value to a dart map
  static Map<String, List<SystemConfigMachineLearningDto>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<SystemConfigMachineLearningDto>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = SystemConfigMachineLearningDto.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'classification',
    'clipVision',
    'clipText',
    'facialRecognition',
  };
}

