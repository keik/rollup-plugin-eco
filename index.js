const eco = require('eco')

const ecoPlugin = () => {
  return {
    transform: (code, id) => {
      if (!id.endsWith('.eco')) return null;
      return { code: `export default ${eco.precompile(code)}`, map: null };
    },
  };
};

module.exports = ecoPlugin;
