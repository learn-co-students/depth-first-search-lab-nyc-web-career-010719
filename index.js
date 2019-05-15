function depthFirstSearch(rootNode, vertices, edges) {
  let stack = []
  stack.push(rootNode)
  let order = [rootNode]
  while (stack.length != 0) {
    let currentNode = stack.pop()
    if (!currentNode.discovered) {
      currentNode.discovered = true
      let adjNodes = findAdjacent(currentNode.name, vertices, edges)
      adjNodes.forEach(node => {
        stack.push(node)
        order.push(node)
      })
    }
  }
  return order
}

function findAdjacent(node, vertices, edges) {
  let adjacentEdges = edges.filter(edge => edge.includes(node))
  let adjacentNodes = adjacentEdges.map(edge => edge.filter(edgeNode => edgeNode !== node))
  let adjacentVertices = adjacentNodes.map(adjNode => vertices.find(vertex => adjNode[0] === vertex.name))
  let undiscoveredNodes = adjacentVertices.filter(adjVertex => !adjVertex.discovered)
  return undiscoveredNodes
}
