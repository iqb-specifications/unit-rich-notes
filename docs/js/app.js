
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
        "$id": "unit-rich-notes@0.2",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "Unit Rich Notes.",
        "description": "Specification for rich text notes as part of the unit data.",
        "type": "array",
        "items": {
          "type": "object",
          "description": "Properties of one entry in the notes list",
          "properties": {
            "tagId": {
              "type": "string",
              "description": "Reference to an entry of a catalog of tags (published/standard or local).",
              "examples": [
                "iqb-rich-notes-tags@3.2:didactical-guide.answering.misconceptions",
                "isb-rich-notes-tags@1.2:didactical-guide.answering.by-framework.link"
              ],
              "x-parser-schema-id": "<anonymous-schema-2>"
            },
            "tagLabel": {
              "type": "string",
              "description": "Label of the corresponding tag the note refers to.",
              "examples": [
                "Antwort-Analyse: Typische Fehler",
                "Verweis zu Eintrag in Rahmenlehrplan"
              ],
              "x-parser-schema-id": "<anonymous-schema-3>"
            },
            "itemUuids": {
              "type": "array",
              "items": {
                "type": "string",
                "description": "This uuid references to the item(s) to be found in the item list of the unit.",
                "x-parser-schema-id": "<anonymous-schema-5>"
              },
              "minItems": 1,
              "x-parser-schema-id": "<anonymous-schema-4>"
            },
            "content": {
              "type": "string",
              "description": "Stringified Html with embedded base64 coded images if needed.",
              "minLength": 1,
              "x-parser-schema-id": "<anonymous-schema-6>"
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
                    "x-parser-schema-id": "<anonymous-schema-9>"
                  },
                  "label": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-10>"
                  },
                  "description": {
                    "type": "string",
                    "x-parser-schema-id": "<anonymous-schema-11>"
                  },
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
                    "x-parser-schema-id": "<anonymous-schema-12>"
                  }
                },
                "required": [
                  "url",
                  "label"
                ],
                "additionalProperties": false,
                "x-parser-schema-id": "<anonymous-schema-8>"
              },
              "minItems": 1,
              "x-parser-schema-id": "<anonymous-schema-7>"
            }
          },
          "required": [
            "tagId",
            "content"
          ],
          "additionalProperties": false,
          "x-parser-schema-id": "<anonymous-schema-1>"
        },
        "definitions": {
          "link": "$ref:$.components.schemas.metadata-values.items.properties.links.items"
        },
        "x-parser-schema-id": "unit-rich-notes@0.2"
      }
    }
  },
  "x-parser-spec-parsed": true,
  "x-parser-api-version": 3,
  "x-parser-spec-stringified": true
};
    const config = {"show":{"sidebar":false},"sidebar":{"showOperations":"byDefault"},"showOperations":false};
    const appRoot = document.getElementById('root');
    AsyncApiStandalone.render(
        { schema, config, }, appRoot
    );
  