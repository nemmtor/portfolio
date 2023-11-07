const commitizenTypes = [
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'refactor',
  'revert',
  'test',
];
const pattern = `^((${commitizenTypes.join(
  '|',
  // eslint-disable-next-line no-useless-escape
)})(\/[a-zA-Z0-9_.-]+){1,2}|changeset-release/main)$`;

module.exports = {
  pattern,
  errorMsg: `Wrong branch name, please use pattern: ${pattern}.`,
};
