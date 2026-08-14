const samples = [];

function listSamples() {
  return samples;
}

function addSample(sample) {
  const record = { id: samples.length + 1, ...sample };
  samples.push(record);
  return record;
}

module.exports = { listSamples, addSample };
