try {
  if (process.env.TEST) {
    console.log(`\nValue of process.env.TEST: "${process.env.TEST}"`);
  } else {
    throw new Error('\nNo value for process.env.TEST');
  }

  if (process.env.NON_EXISTING_VAR) {
    console.log(
      `\nValue of process.env.TEST: "${process.env.NON_EXISTING_VAR}"`
    );
  } else {
    throw new Error('\nNo value for process.env.NON_EXISTING_VAR');
  }
} catch (err) {
  console.log(err.message);
}
