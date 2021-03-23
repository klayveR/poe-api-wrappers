# Contributing

Thanks for wanting to contribute to this project!

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

## Report bugs using Github's [issues](https://github.com/klayveR/poe-api-wrappers/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/klayveR/poe-api-wrappers/issues/new).

## Code contribution guidelines

To make changes to the codebase, fork the repository from the `main` branch. When you are done, please submit a pull request. Please do **not** update the version in `package.json`.

### Tests

If you've added code that needs to be tested, add tests and make sure the tests pass.
To run the test suite, create a `.env` file in the root directory with the following content.

```
POESESSID=your-poe-session-id
```

Then, run the tests with `npm run test` or `npm run test:coverage` to also generate coverage reports.

### Documentation

APIs that are available to the end-user should be documented using [TypeDoc doc comments](https://typedoc.org/guides/doccomments/). Code that is only used internally does not necessarily need to be documented if it's intuitive and easy to understand, but it's obviously preferred to document it.

### Commits

Commit messages should follow the [angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

### Code Style

To guarantee a uniform code style, please run `npm run prettier`. Also, make sure your code lints (`npm run lint`).

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
