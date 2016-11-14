export default function () {

    return function (items, minSize) {

        if (!minSize) {
            return items;
        }

        return items.filter((item) => {
            return item.Size >= minSize;
        });
    };
}
