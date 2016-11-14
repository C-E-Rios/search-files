export default function () {

    return function (items, maxSize) {

        if (!maxSize) {
            return items;
        }

        return items.filter((item) => {
            return item.Size <= maxSize;
        });
    };
}
