const path = require('path');

const { createNode, loadJson, nodeToString } = require('./utils');

function findChildren(node, data) {
    const children = data
        .filter((e) => e.Parent === node.name)
        .map((e) => createNode(e, node.level));

    children.forEach((c) => findChildren(c, data));

    // eslint-disable-next-line no-param-reassign
    node.children = children;
}

function buildTree(data) {
    const root = { name: 'axis', children: [], level: 0 };
    findChildren(root, data);
    return root;
}

function printNode(node, str) {
    str.push(nodeToString(node));

    node.children.forEach((e) => printNode(e, str));
}

function printTree() {
    const absPath = path.resolve(__dirname, './data.json');
    const data = loadJson(absPath);

    const tree = buildTree(data);

    const str = [];
    printNode(tree, str);
    return str.join('\n');
}

// eslint-disable-next-line no-console -- That is ok for demo purpose
console.log(printTree());

module.exports = printTree;
