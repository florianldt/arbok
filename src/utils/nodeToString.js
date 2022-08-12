function nodeToString(node) {
    let prefix = '';

    if (node.level > 0) {
        prefix = `${'|   '.repeat(node.level - 1)}|__ `;
    }

    return prefix + node.name;
}

module.exports = nodeToString;
