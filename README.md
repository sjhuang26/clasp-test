# clasp-test

The root of the repository contains the configuration that runs Prettier with an extension for Typescript. The inner folders, such as /sheets, contain the bare minimum configuration to run the ```clasp``` tool. The Yarn configurations in these two folders, in addition to the code formatter and Clasp compiler, run independently.

Furthermore, the Clasp configuration is hard-coded to push code to specific files on Google Drive, which are not guaranteed to keep existing.
