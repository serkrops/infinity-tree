const useNode = () => {
    const insertNode = (tree, blockId, item) => {
        if (!item.trim().length) {
            return tree;
        };

        if (tree.id === blockId) {
            tree.items.push({
                id: new Date().getTime(),
                name: item,
                items: [],
            });

            return tree;
        }

        let latestNode = [];
        latestNode = tree.items.map(ob => {
            return insertNode(ob, blockId, item);
        });

        return { ...tree, items: latestNode };
    };

    const editNode = (tree, blockId, value) => {
        if (tree.id === blockId) {            
            tree.name = value;
            return tree;
        }

        tree.items.map(ob => {
            return editNode(ob, blockId, value);
        });

        return { ...tree };
    };

    const deleteNode = (tree, id) => {
        for (let i = 0; i < tree.items.length; i++) {
            const currentItem = tree.items[i];
            if (currentItem.id === id) {
                tree.items.splice(i, 1);
                return tree;
            } else {
                deleteNode(currentItem, id);
            }
        }

        return tree;
    };

    return { insertNode, editNode, deleteNode };
}

export default useNode;
