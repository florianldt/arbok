function createNode(data, parentLevel) {
    return {
        parent: data.Parent,
        name: data.Name,
        children: [],
        level: parentLevel + 1,
    };
}

module.exports = createNode;
