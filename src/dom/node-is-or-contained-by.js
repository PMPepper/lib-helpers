

export default function domNodeIsOrContainedBy(node, test) {
  if(typeof(test) === 'string') {//if a string supplied, assume it is a css selector to match the node against
    const testStr = test;
    test = (testNode) => {
      return testNode instanceof Element && testNode.matches(testStr);
    }
  } else if(test instanceof Node) {
    const targetNode = test;

    test = (testNode) => {
      return testNode.isSameNode(targetNode);
    }
  }

  while(node) {
    if(test(node)) {
      return node;
    }

    node = node.parentNode;
  }

  return false;
}
