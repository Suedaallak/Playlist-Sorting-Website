// ---------- PLAYLIST DATA INTEGRATION ----------
function toSongObjects(data) {
    return data.map(([title, artist, duration, listened]) => ({
        title,
        artist,
        duration,
        listened
    }));
}

const predefinedPlaylists = {
    smallPlaylist: toSongObjects(smallPlaylistData),
    largePlaylist: toSongObjects(largePlaylistData),
    customPlaylist: []
};

// ---------- MAIN LOGIC ----------
document.addEventListener("DOMContentLoaded", () => {

    let playlist = [];
    let currentPlaylistKey = null;
    let comparisons = 0;

    const playlistSelector = document.getElementById("playlistSelector");
    const loadPlaylistBtn = document.getElementById("loadPlaylistBtn");
    const sortBtn = document.getElementById("sortBtn");
    const addSongBtn = document.getElementById("addSongBtn");

    const sortKeySelect = document.getElementById("sortKey");
    const sortAlgorithmSelect = document.getElementById("sortAlgorithm");
    const orderSelect = document.getElementById("sortOrder");

    const playlistTable = document.getElementById("playlistTable");

    const newTitle = document.getElementById("newTitle");
    const newArtist = document.getElementById("newArtist");
    const newDuration = document.getElementById("newDuration");
    const newListened = document.getElementById("newListened");

    // LOAD PLAYLIST
    loadPlaylistBtn.addEventListener("click", () => {
        const selected = playlistSelector.value;

        if (!selected) {
            alert("Please select a playlist.");
            return;
        }

        currentPlaylistKey = selected;
        playlist = predefinedPlaylists[selected];
        renderPlaylist();
    });

    // ADD SONG
    addSongBtn.addEventListener("click", () => {

        if (!currentPlaylistKey) {
            alert("Load a playlist first.");
            return;
        }

        if (!newTitle.value || !newArtist.value) {
            alert("Fill all fields.");
            return;
        }

        playlist.push({
            title: newTitle.value,
            artist: newArtist.value,
            duration: Number(newDuration.value),
            listened: Number(newListened.value)
        });

        renderPlaylist();

        newTitle.value = "";
        newArtist.value = "";
        newDuration.value = "";
        newListened.value = "";
    });

    // SORT PLAYLIST
    sortBtn.addEventListener("click", function () {
        const key = sortKeySelect.value;
        const algorithm = sortAlgorithmSelect.value;
        const order = orderSelect.value; // ascending / descending

        comparisons = 0;
        const startTime = performance.now();

        if (algorithm === "bubble") {
            bubbleSort(playlist, key, order);
        } else if (algorithm === "merge") {
        playlist = mergeSort(playlist, key, order);
        }

        const endTime = performance.now();

        renderPlaylist();
        updatePerformance(algorithm, order, comparisons, endTime - startTime);
    });

    function renderPlaylist() {
        playlistTable.innerHTML = "";

        playlist.forEach((song, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${song.title}</td>
                <td>${song.artist}</td>
                <td>${song.duration}</td>
                <td>${song.listened}</td>
                <td>
                    <button class="delete-btn" data-index="${index}">
                        Delete
                    </button>
                </td>
            `;

            playlistTable.appendChild(row);
        });

        attachDeleteHandlers();
    }

    function attachDeleteHandlers() {
        const deleteButtons = document.querySelectorAll(".delete-btn");

        deleteButtons.forEach(button => {
            button.addEventListener("click", function () {
                const index = Number(this.dataset.index);

                playlist.splice(index, 1);
                renderPlaylist();
            });
        });
    }

    function updatePerformance(algorithm, order, comparisons, time) {
        document.getElementById("perfAlgo").textContent =
            algorithm === "bubble" ? "Bubble Sort" : "Merge Sort";

        document.getElementById("perfOrder").textContent =
            order === "asc" ? "Ascending" : "Descending";

        document.getElementById("perfComparisons").textContent = comparisons;
        document.getElementById("perfTime").textContent = time.toFixed(3);
    }

    // ---------- SORTING ----------
    function bubbleSort(arr, key, order) {
        const n = arr.length;

        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                const cmp = compare(arr[j], arr[j + 1], key);

                if ((order === "asc" && cmp > 0) ||
                    (order === "desc" && cmp < 0)) {

                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    function mergeSort(arr, key, order) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid), key, order);
        const right = mergeSort(arr.slice(mid), key, order);

        return merge(left, right, key, order);
    }

    function merge(left, right, key, order) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
            const cmp = compare(left[i], right[j], key);

            if ((order === "asc" && cmp <= 0) ||
                (order === "desc" && cmp >= 0)) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
    }

    function compare(a, b, key) {
        comparisons++;

        if (typeof a[key] === "string") {
            return a[key].localeCompare(b[key]);
        } else {
            return a[key] - b[key];
        }
    }
});