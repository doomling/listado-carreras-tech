document.addEventListener('DOMContentLoaded', function() {
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;
    const comparer = (idx, asc) => (a, b) => ((v1, v2) => 
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
        )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
        const table = th.closest('table');
        const tbody = table.querySelector('tbody');
        Array.from(tbody.querySelectorAll('tr'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => tbody.appendChild(tr));
    })));
});

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('searchInput');
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');

    input.addEventListener('keyup', function() {
        const term = input.value.toLowerCase();
        rows.forEach(row => {
            row.style.display = row.cells[0].textContent.toLowerCase().includes(term) ? '' : 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
            const regex = /(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/g;
            document.querySelectorAll('table td').forEach(td => {
                td.innerHTML = td.innerHTML.replace(regex, function(url) {
                    return `<a href="${url}" target="_blank">${url}</a>`;
                });
            });
        });
