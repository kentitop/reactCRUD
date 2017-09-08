export const itemsFormattedForDropdown = items => {
    if (!items) {
        return;
    }

    return items.map(author => {
        return {
            value: item.id,
            text: `${item.firstName} ${item.lastName}`
        };
    });
};
