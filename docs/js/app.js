
    const schema = {
  "asyncapi": "2.5.0",
  "info": {
    "title": "unit-rich-notes",
    "description": "Specification for rich text notes as part of the unit data.",
    "license": {
      "name": "CC0 1.0",
      "url": "https://creativecommons.org/publicdomain/zero/1.0/"
    },
    "version": " - click on schema id to expand",
    "contact": {
      "name": "Home of iqb-specifications (German only)",
      "url": "https://iqb-specifications.github.io/"
    }
  },
  "channels": {
    "iqb_data_structures": {
      "subscribe": {
        "operationId": "Please select one schema",
        "message": {
          "messageId": "select_schema",
          "x-parser-message-name": "select_schema"
        }
      }
    }
  },
  "components": {
    "schemas": {
      "metadata-values": {
        "$id": "unit-rich-notes@0.1",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Unit Rich Notes.",
        "description": "Specification for rich text notes as part of the unit data.",
        "type": "object",
        "properties": {
          "tags": {
            "type": "array",
            "description": "Structure and labels of all used tags",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string",
                  "x-parser-schema-id": "<anonymous-schema-3>"
                },
                "label": {
                  "description": "Language tagged text",
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "lang": {
                        "description": "ISO-language code",
                        "type": "string",
                        "minLength": 1,
                        "pattern": "^[a-z]{2}$",
                        "x-parser-schema-id": "<anonymous-schema-6>"
                      },
                      "value": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-7>"
                      }
                    },
                    "required": [
                      "lang",
                      "value"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-5>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-4>"
                },
                "description": "$ref:$.components.schemas.metadata-values.properties.tags.items.properties.label",
                "children": {
                  "type": "array",
                  "items": {
                    "$ref": "#/definitions/tagEntry",
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-8>"
                }
              },
              "required": [
                "id",
                "label"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-2>"
            },
            "x-parser-schema-id": "<anonymous-schema-1>"
          },
          "notes": {
            "type": "array",
            "description": "All rich text notes.",
            "items": {
              "type": "object",
              "description": "Properties of one entry in the notes list",
              "properties": {
                "tagId": {
                  "type": "string",
                  "description": "Id of the corresponding tag the note refers to.",
                  "default": "BUTTONS",
                  "x-parser-schema-id": "<anonymous-schema-12>"
                },
                "itemReferences": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "This item id references to the item list of the unit.",
                    "x-parser-schema-id": "<anonymous-schema-14>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-13>"
                },
                "content": {
                  "type": "string",
                  "description": "Stringified Html with embedded base64 coded images if needed.",
                  "minLength": 1,
                  "x-parser-schema-id": "<anonymous-schema-15>"
                },
                "links": {
                  "type": "array",
                  "description": "List of links providing more information.",
                  "items": {
                    "type": "object",
                    "description": "Url as part of a note to link to other resources",
                    "properties": {
                      "url": {
                        "type": "string",
                        "x-parser-schema-id": "<anonymous-schema-18>"
                      },
                      "label": "$ref:$.components.schemas.metadata-values.properties.tags.items.properties.label",
                      "description": "$ref:$.components.schemas.metadata-values.properties.tags.items.properties.label",
                      "type": {
                        "type": "string",
                        "description": "Used to classify the link for better UI",
                        "enum": [
                          "COMPETENCE_DESCRIPTION",
                          "COMPETENCE_STRUCTURE",
                          "MATERIAL_DOWNLOAD",
                          "MATERIAL_READ",
                          "MEDIA_SOURCES",
                          "ASSESSMENT_TASK_EXAMPLE",
                          "TRAINING_TASK_EXAMPLE"
                        ],
                        "default": "COMPETENCE_DESCRIPTION",
                        "x-parser-schema-id": "<anonymous-schema-19>"
                      }
                    },
                    "required": [
                      "url",
                      "label"
                    ],
                    "additionalProperties": false,
                    "x-parser-schema-id": "<anonymous-schema-17>"
                  },
                  "minItems": 1,
                  "x-parser-schema-id": "<anonymous-schema-16>"
                }
              },
              "required": [
                "tagId",
                "content"
              ],
              "additionalProperties": false,
              "x-parser-schema-id": "<anonymous-schema-11>"
            },
            "x-parser-schema-id": "<anonymous-schema-10>"
          }
        },
        "required": [
          "tags",
          "notes"
        ],
        "additionalProperties": false,
        "definitions": {
          "languageTaggedText": "$ref:$.components.schemas.metadata-values.properties.tags.items.properties.label",
          "tagEntry": "$ref:$.components.schemas.metadata-values.properties.tags.items",
          "link": "$ref:$.components.schemas.metadata-values.properties.notes.items.properties.links.items",
          "note": "$ref:$.components.schemas.metadata-values.properties.notes.items"
        },
        "x-parser-schema-id": "unit-rich-notes@0.1"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-circular": true,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  