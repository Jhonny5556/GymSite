document.addEventListener("DOMContentLoaded", () => {
    const table = document.querySelector("table");
    const headers = table.querySelectorAll("th");
    const rows = Array.from(table.querySelectorAll("tbody tr")).filter(row => !row.querySelector("td[colspan]"));

    headers.forEach((header, index) => {
        header.addEventListener("click", () => {
            const isNumericColumn = index === 2; // Prezzo column
            const isDiscountColumn = index === 3; // Sconto column

            const sortedRows = rows.sort((a, b) => {
                const aText = a.children[index].textContent.trim();
                const bText = b.children[index].textContent.trim();

                if (isNumericColumn) {
                    const aValue = parseFloat(aText.replace("€", ""));
                    const bValue = parseFloat(bText.replace("€", ""));
                    return aValue - bValue;
                }

                if (isDiscountColumn) {
                    const aValue = parseFloat(aText.replace("%", "").replace("-", ""));
                    const bValue = parseFloat(bText.replace("%", "").replace("-", ""));
                    return aValue - bValue;
                }

                return aText.localeCompare(bText);
            });

            const tbody = table.querySelector("tbody");
            sortedRows.forEach(row => tbody.appendChild(row));
        });
    });
});