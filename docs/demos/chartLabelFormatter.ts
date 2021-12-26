export const chartLabelFormatter = (params) => {
  const rows = params.reduce((prev, curr) => {
    const {
      seriesName,
      value: [, value],
      color,
    } = curr;
    prev = `${prev}
  <div style="margin: 0;line-height: 1.3em;display: flex;align-items: center;">
    <div style="width: 10px;height: 10px; border-radius: 50%;background: ${color}; margin-right: 0.5em;"></div>
    <div style="width: 450px;white-space: normal;word-break: break-all;">${seriesName}</div>
    <div style="margin-left: 2em;font-size: 1.3em;">${value}</div>
  </div>`;
    return prev;
  }, '');

  const currTime = params?.[0]?.name || params?.[0]?.value?.[0];
  const html = `
  <div style="display: flex;flex-direction: column;">
    <h4 style="margin: 0;line-height: 1.3em;">${currTime}</h4>
    ${rows}
  </div>`;

  return html;
};

export const scatterLabelFormatter = (params) => {
  const html = `
  <div style="display: flex;flex-direction: column;">
    <h4 style="margin: 0;line-height: 1.3em;">${params.data[0]}</h4>
    <div style="margin: 0;line-height: 1.3em;display: flex;align-items: center;">
      <div style="width: 10px;height: 10px; border-radius: 50%;background: ${params.color}; margin-right: 0.5em;"></div>
      <div style="width: 450px;white-space: normal;word-break: break-all;">${params.seriesName}</div>
      <div style="margin-left: 2em;font-size: 1.3em;">${params.data[1]}</div>
    </div>
  </div>`
  return html
}