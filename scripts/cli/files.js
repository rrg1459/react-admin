const filesInterface = {
  component: 'component',
  css: 'css',
};

export const files = [filesInterface.component, filesInterface.css];

export const filesInfo = {
  [filesInterface.component]: {
    name: (name) => `${name}.tsx`,
    content: (name, nameKebabCase, camelCaseName) => (
      `import './${camelCaseName}.scss';\n` +
      '\n' +
      `const ${name} = () => {\n` +
      '  return (\n' +
      `    <div className="${nameKebabCase}">\n` +
      `      ${name}\n` +
      '    </div>\n' +
      '  );\n' +
      '};\n' +
      '\n' +
      `export default ${name};`
    ),
  },
  [filesInterface.css]: {
    name: (name) => `${name}.scss`,
    content: (_name, nameKebabCase) => (
      `.${nameKebabCase} {\n` +
      '  background-color: #fbeeff;\n' +
      '}\n'
    ),
  },
};
