//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.12

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class CLIPTextConfig {
  /// Returns a new [CLIPTextConfig] instance.
  CLIPTextConfig({
    required this.modelName,
  });

  String modelName;

  @override
  bool operator ==(Object other) => identical(this, other) || other is CLIPTextConfig &&
     other.modelName == modelName;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (modelName.hashCode);

  @override
  String toString() => 'CLIPTextConfig[modelName=$modelName]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'modelName'] = this.modelName;
    return json;
  }

  /// Returns a new [CLIPTextConfig] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static CLIPTextConfig? fromJson(dynamic value) {
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return CLIPTextConfig(
        modelName: mapValueOfType<String>(json, r'modelName')!,
      );
    }
    return null;
  }

  static List<CLIPTextConfig> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <CLIPTextConfig>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = CLIPTextConfig.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, CLIPTextConfig> mapFromJson(dynamic json) {
    final map = <String, CLIPTextConfig>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = CLIPTextConfig.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of CLIPTextConfig-objects as value to a dart map
  static Map<String, List<CLIPTextConfig>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<CLIPTextConfig>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = CLIPTextConfig.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'modelName',
  };
}

