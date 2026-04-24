[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)

Rich notes are an addendum to the data of an assessment unit. This repository contains the specification.

Read more:

* [All specifications of IQB](https://iqb-specifications.github.io/) (German only)
* [Learn about TBA](https://iqb-berlin.github.io/tba-info/) (German only)
* [Verona-Interfaces](https://verona-interfaces.github.io/)

Change log: see releases.

## For developers

After modifying the spec:

1. Update the version in `unit-rich-notes.schema.json` (`$id`).
2. Update the version in `asyncapi.yaml` (`info.version`).
3. Run `npm run validate-schema`.
4. Commit the changes and create a release using the same version as Git tag.

This way, the new spec is accessible via w3id.org. Example:

```
https://w3id.org/iqb/spec/unit-rich-notes/1.6
```
