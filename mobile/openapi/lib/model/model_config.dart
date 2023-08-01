//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.12

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class ModelConfig {
  /// Returns a new [ModelConfig] instance.
  ModelConfig({
    required this.modelName,
    required this.modelType,
    this.minScore,
  });

  String modelName;

  ModelType modelType;

  ///
  /// Please note: This property should have been non-nullable! Since the specification file
  /// does not include a default value (using the "default:" property), however, the generated
  /// source code must fall back to having a nullable type.
  /// Consider adding a "default:" property in the specification file to hide this note.
  ///
  int? minScore;

  @override
  bool operator ==(Object other) => identical(this, other) || other is ModelConfig &&
     other.modelName == modelName &&
     other.modelType == modelType &&
     other.minScore == minScore;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (modelName.hashCode) +
    (modelType.hashCode) +
    (minScore == null ? 0 : minScore!.hashCode);

  @override
  String toString() => 'ModelConfig[modelName=$modelName, modelType=$modelType, minScore=$minScore]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'modelName'] = this.modelName;
      json[r'modelType'] = this.modelType;
    if (this.minScore != null) {
      json[r'minScore'] = this.minScore;
    } else {
    //  json[r'minScore'] = null;
    }
    return json;
  }

  /// Returns a new [ModelConfig] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static ModelConfig? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return ModelConfig(
        modelName: mapValueOfType<String>(json, r'modelName')!,
        modelType: ModelType.fromJson(json[r'modelType'])!,
        minScore: mapValueOfType<int>(json, r'minScore'),
      );
    }
    return null;
  }

  static List<ModelConfig> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <ModelConfig>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = ModelConfig.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, ModelConfig> mapFromJson(dynamic json) {
    final map = <String, ModelConfig>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = ModelConfig.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of ModelConfig-objects as value to a dart map
  static Map<String, List<ModelConfig>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<ModelConfig>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = ModelConfig.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'modelName',
    'modelType',
  };
}

