//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.12

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class FacialRecognitionConfig {
  /// Returns a new [FacialRecognitionConfig] instance.
  FacialRecognitionConfig({
    required this.modelName,
    required this.minScore,
  });

  String modelName;

  int minScore;

  @override
  bool operator ==(Object other) => identical(this, other) || other is FacialRecognitionConfig &&
     other.modelName == modelName &&
     other.minScore == minScore;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (modelName.hashCode) +
    (minScore.hashCode);

  @override
  String toString() => 'FacialRecognitionConfig[modelName=$modelName, minScore=$minScore]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'modelName'] = this.modelName;
      json[r'minScore'] = this.minScore;
    return json;
  }

  /// Returns a new [FacialRecognitionConfig] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static FacialRecognitionConfig? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return FacialRecognitionConfig(
        modelName: mapValueOfType<String>(json, r'modelName')!,
        minScore: mapValueOfType<int>(json, r'minScore')!,
      );
    }
    return null;
  }

  static List<FacialRecognitionConfig> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <FacialRecognitionConfig>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = FacialRecognitionConfig.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, FacialRecognitionConfig> mapFromJson(dynamic json) {
    final map = <String, FacialRecognitionConfig>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = FacialRecognitionConfig.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of FacialRecognitionConfig-objects as value to a dart map
  static Map<String, List<FacialRecognitionConfig>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<FacialRecognitionConfig>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = FacialRecognitionConfig.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'modelName',
    'minScore',
  };
}

