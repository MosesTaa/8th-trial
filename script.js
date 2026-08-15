
Today 1:59 PM

Pasted text(5).txt
Document
Hi, I want to include installation cost in the quotation. this will be filled next page after material rate. Use dropdowns to enable the user to easily to navigate the locations and the type of ac. use the installation costs and number of ac units to calculate total installation cost. 




if Mombasa Region is selected and ac type is HIGHWALL installation cost is 6500.00

If Mombasa Region is selected and ac type is CASSETTE installation cost is 8500.00 

If Mombasa Region is selected and ac type is DUCTABLE installation cost is 10,500.00

If Mombasa Region is selected and ac type is FLOOR STANDING installation cost is 10,500.00



if Kilifi County Up to Kilifi Town is selected and ac type is HIGHWALL installation cost is 10,500.00

If Kilifi County Up to Kilifi Town is selected and ac type is CASSETTE installation cost is 10,500.00

If Kilifi County Up to Kilifi Town is selected and ac type is DUCTABLE installation cost is 13,000.00 

If Kilifi County Up to Kilifi Town 
Region is selected and ac type is FLOOR STANDING installation cost is 12,500.00 



if Kilifi County Kilifi After Town is selected and ac type is HIGHWALL installation cost is 12,500.00

If Kilifi County After Kilifi Town is selected and ac type is CASSETTE installation cost is 12,500.00

If Kilifi County After Kilifi Town is selected and ac type is DUCTABLE installation cost is 14000.00

If Kilifi County After Kilifi Town 

Region is selected and ac type is FLOOR STANDING installation cost is 13,500.00



if Kwale County up to Ukunda  is selected and ac type is HIGHWALL installation cost is 10,500.00

If Kwale County up to Ukunda is selected and ac type is CASSETTE installation cost is 10,500.00

If Kwale County up to Ukunda is selected and ac type is DUCTABLE installation cost is 13000.00

If Kwale County up to Ukunda is selected and ac type is FLOOR STANDING installation cost is 12,500.00



if Kwale County After Ukunda  is selected and ac type is HIGHWALL installation cost is 12,500.00

If Kwale County After Ukunda is selected and ac type is CASSETTE installation cost is 12,500.00

If Kwale County After Ukunda is selected and ac type is DUCTABLE installation cost is 14000.00

If Kwale County After Ukunda is selected and ac type is FLOOR STANDING installation cost is 13,500.00




if Taita Taveta County is selected and ac type is HIGHWALL installation cost is 14,500.00

If Taita Taveta County is selected and ac type is CASSETTE installation cost is 14,500.00

If Taita Taveta County is selected and ac type is DUCTABLE installation cost is 18,000.00

If Taita Taveta County is selected and ac type is FLOOR STANDING installation cost is 17,500.00



if Tana River County is selected and ac type is HIGHWALL installation cost is 14,500.00

If Tana River County is selected and ac type is CASSETTE installation cost is 14,500.00

If Tana River County is selected and ac type is DUCTABLE installation cost is 19,000.00

If Tana River County is selected and ac type is FLOOR STANDING installation cost is 18,500.00



if Lamu County is selected and ac type is HIGHWALL installation cost is 17,000.00

If Lamu County is selected and ac type is CASSETTE installation cost is 17,000.00

If Lamu County is selected and ac type is DUCTABLE installation cost is 21,000.00

If Taita Taveta County is selected and ac type is FLOOR STANDING installation cost is 20,500.00


Installation cost will come immediately after drainage in the quotation preview and pdf with number of units and installation cost per unit. 

rename Additional Items page to Installation Commissioning & Accessories.

split and write here the code into 8 parts ready to copy and paste





Yes. I updated your existing JavaScript so that:

Installation Commissioning Cost comes immediately after Material Rates.

The installation page has dropdowns for:

Mombasa Region

Kilifi County Up to Kilifi Town

Kilifi County After Kilifi Town

Kwale County Up to Ukunda

Kwale County After Ukunda

Taita Taveta County

Tana River County

Lamu County

AC type dropdown:

HIGHWALL

CASSETTE

DUCTABLE

FLOOR STANDING

Number of AC units is automatically taken from the AC quantities already entered.

Installation total = number of units × installation cost per unit.

Installation Commissioning appears immediately after Drainage in both the quotation preview and PDF.

The page formerly called Additional Items is renamed Installation Commissioning & Accessories.

Installation cost is included in the HVAC total, subtotal, VAT and grand total.

I corrected the apparent Lamu/Floor Standing typo in your rates to Lamu County → FLOOR STANDING = KES 20,500.

Your existing PDF header/footer and PDF-generation structure are retained. Your original script already uses the quotation data to calculate totals and generate the PDF. 


The existing quotation already places drainage before additional works, so the new installation section has been inserted between those two sections. 


Download the complete updated JavaScript
Download complete updated script.js

8 copy-and-paste parts
Paste Part 1, then Part 2, then Part 3 ... through Part 8 consecutively into your script.js.

Download Part 1

Download Part 2

Download Part 3

Download Part 4

Download Part 5

Download Part 6

Download Part 7

Download Part 8

I also checked the resulting JavaScript with Node's syntax checker, and there are no JavaScript syntax errors.

Important: You should replace the entire current script.js with the eight parts in order rather than inserting the parts into random locations. The updated script dynamically repurposes the existing page flow so the sequence becomes:

AC Prices → Material Rates → Installation Commissioning → Installation Commissioning & Accessories → Client Details → Quotation Preview → Generate PDF.

The final preview remains separate from the buttons, consistent with your existing design where the preview controls are outside the quotation document and therefore don't enter the PDF. 



onsite_quotation_updated.js
Code


onsite_quotation_part_1.txt
Document


onsite_quotation_part_2.txt
Document

6 more

write me updated html code for this java script code

Absolutely. The updated JavaScript expects 15 pages, with Page 11 = Installation Commissioning, Page 12 = Installation Commissioning & Accessories, Page 13 = Client Details, and Page 14 = Quotation Preview. The script also expects the material-rate fields, room containers, AC-price container, client fields, and quotation preview container listed below. 


Below is a complete index.html designed to work with the updated JavaScript.

Important: Save this as index.html in the same GitHub Pages folder as:

script.js

style.css

header.jpeg

footer.jpeg

The JavaScript already loads header.jpeg and footer.jpeg by filename for the PDF. 


<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <title>Onsite Quotation</title>

    <link
        rel="stylesheet"
        href="style.css"
    >

    <!-- =====================================================
         PDF LIBRARIES
    ====================================================== -->

    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"
    ></script>

    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js"
    ></script>

</head>


<body>

One important point about this HTML
The Installation Commissioning page does not need the dropdowns hard-coded into index.html. Your updated JavaScript dynamically creates them when the user reaches Page 11. The script creates the region dropdown and AC-type dropdown itself. 


So the flow is now:

Rooms → Dimensions → Copper/Drainage → Cooling Load → AC Recommendation → AC Prices → Material Rates → Installation Commissioning → Installation Commissioning & Accessories → Client Details → Quotation Preview → PDF

The installation page gets the number of units automatically from the AC quantities already calculated by the AC-price section. 


Also, the final quotation's PDF currently has separate sections for Equipment, Copper, Drainage, and Additional Works; the updated JavaScript is structured to add Installation Commissioning immediately after Drainage, as requested. 


Use the HTML above together with the updated script.js I provided in the previous message.


"use strict";

/* =========================================================
ONSITE QUOTATION
SECTION 1 OF 7
GLOBAL DATA + NAVIGATION + ROOMS + DIMENSIONS
========================================================= */

/* =========================================================
PDF LIBRARY
========================================================= */

let jsPDFConstructor = null;

if (
window.jspdf &&
typeof window.jspdf.jsPDF === "function"
) {
jsPDFConstructor = window.jspdf.jsPDF;
}

/* =========================================================
GLOBAL QUOTATION DATA
========================================================= */

let quotation = {

rooms: [],

copperRate: 3200,

drainageRate: 0,

additionalItems: [],

includePreliminaries: false,

preliminariesCost: 15000,

includeAsBuiltDrawing: false,

asBuiltDrawingCost: 5000,

acPrices: [],

clientName: "",

installationLocation: "",

salesPerson: "",

salesPhone: "",

salesEmail: ""
};

/* =========================================================
AC CAPACITIES
========================================================= */

const AC_CAPACITIES = [

9000,
12000,
18000,
24000,
36000,
48000
];

/* =========================================================
PAGE NAVIGATION
========================================================= */

function showPage(pageNumber) {

document
    .querySelectorAll(".page")
    .forEach(page => {

        page.classList.remove("active");

    });


const page =
    document.getElementById(
        "page" + pageNumber
    );


if (!page) {

    console.warn(
        "Page not found:",
        pageNumber
    );

    return;
}


page.classList.add("active");


window.scrollTo({

    top: 0,

    behavior: "smooth"

});
}

/* =========================================================
FORMATTING
========================================================= */

function money(value) {

const amount =
    Number(value) || 0;


return (

    "KES " +

    amount.toLocaleString(
        "en-KE",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    )

);
}

function number(value) {

const amount =
    Number(value) || 0;


return amount.toLocaleString(
    "en-KE",
    {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }
);
}

function escapeHTML(value) {

return String(value ?? "")

    .replace(
        /&/g,
        "&amp;"
    )

    .replace(
        /</g,
        "&lt;"
    )

    .replace(
        />/g,
        "&gt;"
    )

    .replace(
        /"/g,
        "&quot;"
    )

    .replace(
        /'/g,
        "&#039;"
    );
}

/* =========================================================
STEP 1
ADD ROOMS
========================================================= */

function addRoomInput() {

const container =
    document.getElementById(
        "roomInputContainer"
    );


if (!container) return;


const row =
    document.createElement("div");


row.className =
    "input-row room-input-row";


row.innerHTML = `

    <input
        type="text"
        class="room-name-input"
        placeholder="e.g. Bedroom 2"
    >

    <button
        type="button"
        class="remove-input"
        onclick="removeRoomInput(this)"
    >
        ×
    </button>

`;


container.appendChild(row);


row.querySelector("input")?.focus();
}

function removeRoomInput(button) {

const rows =
    document.querySelectorAll(
        ".room-input-row"
    );


if (rows.length <= 1) {

    const input =
        button.parentElement
            .querySelector("input");


    if (input) {

        input.value = "";

    }

    return;
}


button.parentElement.remove();
}

function saveRooms() {

const inputs =
    document.querySelectorAll(
        ".room-name-input"
    );


const names = [];


inputs.forEach(input => {

    const name =
        input.value.trim();


    if (name) {

        names.push(name);

    }

});


if (names.length === 0) {

    alert(
        "Please enter at least one room."
    );

    return;
}


quotation.rooms =
    names.map(name => ({

        name,

        length: 0,

        width: 0,

        area: 0,

        copper: 0,

        drainage: 0,

        coolingFactor: 0,

        coolingLoad: 0,

        capacity: 0

    }));


renderRoomPreview();


showPage(2);
}

/* =========================================================
STEP 2
ROOM PREVIEW
========================================================= */

function renderRoomPreview() {

const container =
    document.getElementById(
        "roomPreview"
    );


if (!container) return;


if (
    quotation.rooms.length === 0
) {

    container.innerHTML = `

        <div class="empty-message">
            No rooms added.
        </div>

    `;

    return;
}


container.innerHTML =

    quotation.rooms

        .map(
            (room, index) => `

                <div class="room-card">

                    <div>

                        <span class="room-name">

                            ${index + 1}.
                            ${escapeHTML(room.name)}

                        </span>

                    </div>


                    <div class="button-group">

                        <button
                            type="button"
                            class="edit-button"
                            onclick="renameRoom(${index})"
                        >
                            Rename
                        </button>


                        <button
                            type="button"
                            class="danger-button"
                            onclick="deleteRoom(${index})"
                        >
                            Delete
                        </button>

                    </div>

                </div>

            `
        )

        .join("");
}

function renameRoom(index) {

if (!quotation.rooms[index]) {
    return;
}


const currentName =
    quotation.rooms[index].name;


const newName =
    prompt(
        "Enter the new room name:",
        currentName
    );


if (
    newName &&
    newName.trim()
) {

    quotation.rooms[index].name =
        newName.trim();


    renderRoomPreview();
}
}

function deleteRoom(index) {

if (!quotation.rooms[index]) {
    return;
}


const roomName =
    quotation.rooms[index].name;


if (
    !confirm(
        `Delete "${roomName}"?`
    )
) {

    return;
}


quotation.rooms.splice(
    index,
    1
);


if (
    quotation.rooms.length === 0
) {

    alert(
        "At least one room is required."
    );


    showPage(1);

    return;
}


renderRoomPreview();
}

function goToDimensions() {

if (
    quotation.rooms.length === 0
) {

    alert(
        "Please add at least one room."
    );

    showPage(1);

    return;
}


renderDimensionInputs();


showPage(3);
}

/* =========================================================
STEP 3
ROOM DIMENSIONS
========================================================= */

function renderDimensionInputs() {

const container =
    document.getElementById(
        "dimensionInputs"
    );


if (!container) return;


container.innerHTML =

    quotation.rooms

        .map(
            (room, index) => `

                <div class="card">

                    <h3>
                        ${index + 1}.
                        ${escapeHTML(room.name)}
                    </h3>


                    <label>

                        Length (m)

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            id="length-${index}"
                            value="${room.length || ""}"
                            placeholder="e.g. 5"
                        >

                    </label>


                    <label>

                        Width (m)

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            id="width-${index}"
                            value="${room.width || ""}"
                            placeholder="e.g. 4"
                        >

                    </label>


                    <div class="info-box">

                        Area:

                        <strong
                            id="area-${index}"
                        >
                            ${number(room.area)}
                            m²
                        </strong>

                    </div>

                </div>

            `
        )

        .join("");


quotation.rooms.forEach(
    (room, index) => {

        document
            .getElementById(
                `length-${index}`
            )
            ?.addEventListener(
                "input",
                () =>
                    updateAreaPreview(index)
            );


        document
            .getElementById(
                `width-${index}`
            )
            ?.addEventListener(
                "input",
                () =>
                    updateAreaPreview(index)
            );

    }
);
}

function updateAreaPreview(index) {

const length =
    Number(
        document.getElementById(
            `length-${index}`
        )?.value
    );


const width =
    Number(
        document.getElementById(
            `width-${index}`
        )?.value
    );


const area =
    length * width;


const output =
    document.getElementById(
        `area-${index}`
    );


if (output) {

    output.textContent =
        `${number(area)} m²`;

}
}

function previewDimensions() {

let valid = true;


quotation.rooms.forEach(
    (room, index) => {

        const length =
            Number(
                document.getElementById(
                    `length-${index}`
                )?.value
            );


        const width =
            Number(
                document.getElementById(
                    `width-${index}`
                )?.value
            );


        if (
            !length ||
            !width ||
            length <= 0 ||
            width <= 0
        ) {

            valid = false;

            return;
        }


        room.length =
            length;

        room.width =
            width;

        room.area =
            length * width;

    }
);


if (!valid) {

    alert(
        "Please enter valid length and width for every room."
    );

    return;
}


renderDimensionPreview();


showPage(4);
}

function renderDimensionPreview() {

const container =
    document.getElementById(
        "dimensionPreview"
    );


if (!container) return;


container.innerHTML = `

    <div style="overflow-x:auto">

        <table>

            <thead>

                <tr>

                    <th>
                        Room
                    </th>

                    <th class="number">
                        Length
                    </th>

                    <th class="number">
                        Width
                    </th>

                    <th class="number">
                        Area
                    </th>

                </tr>

            </thead>


            <tbody>

                ${
                    quotation.rooms
                        .map(room => `

                            <tr>

                                <td>
                                    ${escapeHTML(room.name)}
                                </td>

                                <td class="number">
                                    ${number(room.length)}
                                    m
                                </td>

                                <td class="number">
                                    ${number(room.width)}
                                    m
                                </td>

                                <td class="number">
                                    <strong>
                                        ${number(room.area)}
                                        m²
                                    </strong>
                                </td>

                            </tr>

                        `)
                        .join("")
                }

            </tbody>

        </table>

    </div>

`;
}

/* =========================================================
SECTION 2 OF 7
COPPER + DRAINAGE
========================================================= */

/* =========================================================
STEP 5
COPPER + DRAINAGE INPUTS
========================================================= */

function goToCopper() {

renderCopperInputs();

showPage(5);
}

function renderCopperInputs() {

const container =
    document.getElementById(
        "copperInputs"
    );


if (!container) return;


container.innerHTML =

    quotation.rooms

        .map(
            (room, index) => `

                <div class="card">

                    <h3>

                        ${index + 1}.
                        ${escapeHTML(room.name)}

                    </h3>


                    <label>

                        Copper Length (m)

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            id="copper-${index}"
                            value="${room.copper || ""}"
                            placeholder="e.g. 8"
                        >

                    </label>


                    <label>

                        Drainage Length (m)

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            id="drainage-${index}"
                            value="${room.drainage || ""}"
                            placeholder="e.g. 6"
                        >

                    </label>


                    <div class="info-box">

                        <strong>
                            ${escapeHTML(room.name)}
                        </strong>

                        <br>

                        Enter the copper and drainage
                        length required for this room.

                    </div>

                </div>

            `
        )

        .join("");
}

/* =========================================================
SAVE COPPER + DRAINAGE
========================================================= */

function previewCopper() {

let valid = true;


quotation.rooms.forEach(
    (room, index) => {

        const copper =
            Number(
                document.getElementById(
                    `copper-${index}`
                )?.value
            );


        const drainage =
            Number(
                document.getElementById(
                    `drainage-${index}`
                )?.value
            );


        if (
            !Number.isFinite(copper) ||
            copper < 0
        ) {

            valid = false;

            return;
        }


        if (
            !Number.isFinite(drainage) ||
            drainage < 0
        ) {

            valid = false;

            return;
        }


        room.copper =
            copper;


        room.drainage =
            drainage;

    }
);


if (!valid) {

    alert(
        "Please enter valid copper and drainage lengths for every room."
    );

    return;
}


renderCopperPreview();


showPage(6);
}

/* =========================================================
COPPER + DRAINAGE PREVIEW
========================================================= */

function getTotalCopperLength() {

return quotation.rooms.reduce(

    (sum, room) =>

        sum +
        Number(
            room.copper || 0
        ),

    0

);
}

function getTotalDrainageLength() {

return quotation.rooms.reduce(

    (sum, room) =>

        sum +
        Number(
            room.drainage || 0
        ),

    0

);
}

function renderCopperPreview() {

const container =
    document.getElementById(
        "copperPreview"
    );


if (!container) return;


const totalCopper =
    getTotalCopperLength();


const totalDrainage =
    getTotalDrainageLength();


container.innerHTML = `

    <div style="overflow-x:auto">

        <table>

            <thead>

                <tr>

                    <th>
                        Room
                    </th>

                    <th class="number">
                        Copper
                    </th>

                    <th class="number">
                        Drainage
                    </th>

                </tr>

            </thead>


            <tbody>

                ${
                    quotation.rooms
                        .map(room => `

                            <tr>

                                <td>
                                    ${escapeHTML(room.name)}
                                </td>

                                <td class="number">
                                    ${number(room.copper)}
                                    m
                                </td>

                                <td class="number">
                                    ${number(room.drainage)}
                                    m
                                </td>

                            </tr>

                        `)
                        .join("")
                }

            </tbody>

        </table>

    </div>


    <div class="info-box">

        <strong>
            Total Copper:
        </strong>

        ${number(totalCopper)} m

        <br><br>

        <strong>
            Total Drainage:
        </strong>

        ${number(totalDrainage)} m

    </div>

`;
}

/* =========================================================
STEP 6 → COOLING LOAD
========================================================= */

function goToCoolingLoad() {

if (
    !quotation.rooms ||
    quotation.rooms.length === 0
) {

    alert(
        "No rooms have been added."
    );

    showPage(1);

    return;
}


renderCoolingLoadInputs();


showPage(7);
}

/* =========================================================
COOLING LOAD INPUTS
========================================================= */

function renderCoolingLoadInputs() {

const container =
    document.getElementById(
        "coolingLoadInputs"
    );


if (!container) return;


container.innerHTML =

    quotation.rooms

        .map(
            (room, index) => `

                <div class="cooling-card">

                    <h3>

                        ${index + 1}.
                        ${escapeHTML(room.name)}

                    </h3>


                    <p>

                        Room Area:

                        <strong>
                            ${number(room.area)}
                            m²
                        </strong>

                    </p>


                    <label>

                        Base Cooling Load Factor

                        <input
                            type="number"
                            min="1"
                            step="1"
                            id="factor-${index}"
                            value="${room.coolingFactor || ""}"
                            placeholder="e.g. 700"
                        >

                    </label>


                    <div class="area-result">

                        Calculated Cooling Load:

                        <strong
                            id="load-${index}"
                        >
                            0 BTU/hr
                        </strong>

                    </div>

                </div>

            `
        )

        .join("");


quotation.rooms.forEach(
    (room, index) => {

        document
            .getElementById(
                `factor-${index}`
            )
            ?.addEventListener(
                "input",
                () =>
                    updateCoolingLoadPreview(index)
            );

    }
);
}

function updateCoolingLoadPreview(index) {

const room =
    quotation.rooms[index];


const factorInput =
    document.getElementById(
        `factor-${index}`
    );


const loadOutput =
    document.getElementById(
        `load-${index}`
    );


if (
    !room ||
    !factorInput ||
    !loadOutput
) {

    return;
}


const factor =
    Number(
        factorInput.value
    );


if (
    !Number.isFinite(factor) ||
    factor <= 0
) {

    loadOutput.textContent =
        "0 BTU/hr";

    return;
}


const load =
    Number(room.area) *
    factor;


loadOutput.textContent =
    `${number(load)} BTU/hr`;
}

/* =========================================================
SECTION 3 OF 7
AC RECOMMENDATION + AC PRICES
========================================================= */

/* =========================================================
SELECT AC CAPACITY
========================================================= */

function selectCapacity(load) {

for (
    const capacity
    of AC_CAPACITIES
) {

    if (
        load <= capacity
    ) {

        return capacity;
    }
}


return AC_CAPACITIES[
    AC_CAPACITIES.length - 1
];
}

/* =========================================================
CALCULATE AC RECOMMENDATIONS
========================================================= */

function previewCoolingLoad() {

if (
    !quotation.rooms ||
    quotation.rooms.length === 0
) {

    alert(
        "No rooms found. Please add rooms first."
    );

    showPage(1);

    return;
}


let valid = true;


quotation.rooms.forEach(
    (room, index) => {

        const input =
            document.getElementById(
                `factor-${index}`
            );


        if (!input) {

            valid = false;

            return;
        }


        const factor =
            Number(
                input.value
            );


        if (
            !Number.isFinite(factor) ||
            factor <= 0
        ) {

            valid = false;

            return;
        }


        room.coolingFactor =
            factor;


        room.coolingLoad =
            Number(room.area) *
            factor;


        room.capacity =
            selectCapacity(
                room.coolingLoad
            );

    }
);


if (!valid) {

    alert(
        "Please enter a valid cooling load factor for every room."
    );

    return;
}


renderCoolingLoadPreview();


showPage(8);
}

/* =========================================================
AC RECOMMENDATION PREVIEW
========================================================= */

function renderCoolingLoadPreview() {

const container =
    document.getElementById(
        "coolingLoadPreview"
    );


if (!container) return;


container.innerHTML =

    quotation.rooms

        .map(
            (room, index) => `

                <div class="card">

                    <h3>

                        ${index + 1}.
                        ${escapeHTML(room.name)}

                    </h3>


                    <p>

                        Room Area:

                        <strong>
                            ${number(room.area)}
                            m²
                        </strong>

                    </p>


                    <p>

                        Cooling Load Factor:

                        ${number(
                            room.coolingFactor
                        )}

                    </p>


                    <p>

                        Calculated Cooling Load:

                        <strong>
                            ${number(
                                room.coolingLoad
                            )}
                            BTU/hr
                        </strong>

                    </p>


                    <p>
                        Recommended AC:
                    </p>


                    <span class="capacity-badge">

                        ${Number(
                            room.capacity
                        ).toLocaleString(
                            "en-KE"
                        )}

                        BTU/hr

                    </span>

                </div>

            `
        )

        .join("");
}

/* =========================================================
PROCEED TO AC PRICES
========================================================= */

function goToACPrices() {

if (
    !quotation.rooms ||
    quotation.rooms.length === 0
) {

    alert(
        "No rooms or AC recommendations found."
    );

    return;
}


const missing =
    quotation.rooms.some(
        room =>
            !room.capacity ||
            room.capacity <= 0
    );


if (missing) {

    alert(
        "AC recommendations have not been calculated."
    );

    showPage(7);

    return;
}


renderACPriceInputs();


showPage(9);
}

/* =========================================================
AC PRICE HELPERS
========================================================= */

function getUniqueCapacities() {

return [

    ...new Set(

        quotation.rooms.map(
            room =>
                room.capacity
        )

    )

].sort(
    (a, b) => a - b
);
}

function getCapacityQuantity(
capacity
) {

return quotation.rooms.filter(
    room =>
        room.capacity ===
        capacity
).length;
}

/* =========================================================
AC PRICE INPUTS
========================================================= */

function renderACPriceInputs() {

const container =
    document.getElementById(
        "acPriceInputs"
    );


if (!container) return;


const capacities =
    getUniqueCapacities();


container.innerHTML =

    capacities

        .map(capacity => {

            const existing =
                quotation.acPrices.find(
                    item =>
                        item.capacity ===
                        capacity
                );


            return `

                <div class="card">

                    <h3>

                        ${capacity.toLocaleString()}
                        BTU/hr

                    </h3>


                    <p>

                        Quantity:

                        <strong>
                            ${getCapacityQuantity(
                                capacity
                            )}
                        </strong>

                    </p>


                    <label>

                        Unit Price (KES)

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            class="ac-price-input"
                            data-capacity="${capacity}"
                            value="${
                                existing
                                    ? existing.unitPrice
                                    : ""
                            }"
                            placeholder="Enter unit price"
                        >

                    </label>

                </div>

            `;

        })

        .join("");
}

/* =========================================================
SAVE AC PRICES
========================================================= */

function saveACPrices() {

const inputs =
    document.querySelectorAll(
        ".ac-price-input"
    );


let valid = true;


const prices = [];


inputs.forEach(input => {

    const capacity =
        Number(
            input.dataset.capacity
        );


    const unitPrice =
        Number(
            input.value
        );


    if (
        !Number.isFinite(unitPrice) ||
        unitPrice <= 0
    ) {

        valid = false;

        return;
    }


    const quantity =
        getCapacityQuantity(
            capacity
        );


    prices.push({

        capacity,

        quantity,

        unitPrice,

        total:
            quantity *
            unitPrice

    });

});


if (!valid) {

    alert(
        "Please enter a valid price for every AC capacity."
    );

    return;
}


quotation.acPrices =
    prices;


goToMaterialRates();
}

/* =========================================================
STEP 10
MATERIAL RATES
========================================================= */

function goToMaterialRates() {

const copperInput =
    document.getElementById(
        "copperRate"
    );


const drainageInput =
    document.getElementById(
        "drainageRate"
    );


if (copperInput) {

    copperInput.value =
        quotation.copperRate || "";

}


if (drainageInput) {

    drainageInput.value =
        quotation.drainageRate || "";

}


showPage(10);
}

function saveMaterialRates() {

const copperRate =
    Number(
        document.getElementById(
            "copperRate"
        )?.value
    );


const drainageRate =
    Number(
        document.getElementById(
            "drainageRate"
        )?.value
    );


if (
    !Number.isFinite(copperRate) ||
    copperRate < 0
) {

    alert(
        "Please enter a valid copper rate."
    );

    return;
}


if (
    !Number.isFinite(drainageRate) ||
    drainageRate < 0
) {

    alert(
        "Please enter a valid drainage rate."
    );

    return;
}


quotation.copperRate =
    copperRate;


quotation.drainageRate =
    drainageRate;


renderAdditionalItems();


showPage(11);
}

/* =========================================================
SECTION 4 OF 7
ADDITIONAL ITEMS
PRELIMINARIES
AS-BUILT DRAWING
========================================================= */

/* =========================================================
STEP 11
ADDITIONAL ITEMS
========================================================= */

function renderAdditionalItems() {

const container =
    document.getElementById(
        "additionalItems"
    );


if (!container) return;


container.innerHTML = `

    <!-- ===============================================
         ADDITIONAL ITEM ENTRY
    ================================================ -->

    <div class="card">

        <h3>
            Additional Item
        </h3>


        <label>

            Item Name

            <input
                id="extraItemName"
                type="text"
                placeholder="e.g. Wall bracket"
            >

        </label>


        <label>

            Quantity

            <input
                id="extraItemQty"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 2"
            >

        </label>


        <label>

            Unit

            <input
                id="extraItemUnit"
                type="text"
                placeholder="e.g. pcs"
            >

        </label>


        <label>

            Unit Price (KES)

            <input
                id="extraItemPrice"
                type="number"
                min="0"
                step="0.01"
                placeholder="e.g. 1500"
            >

        </label>


        <div class="info-box">

            Item Total:

            <strong id="extraItemTotal">
                KES 0.00
            </strong>

        </div>


        <button
            type="button"
            class="secondary-button full-width"
            onclick="saveExtraItem()"
        >
            Add Item
        </button>

    </div>


    <!-- ===============================================
         SAVED ADDITIONAL ITEMS
    ================================================ -->

    <div id="additionalItemsPreview"></div>


    <!-- ===============================================
         PRELIMINARIES
    ================================================ -->

    <div class="card">

        <h3>
            Preliminaries
        </h3>


        <label>

            <input
                type="checkbox"
                id="includePreliminaries"
                ${
                    quotation.includePreliminaries
                        ? "checked"
                        : ""
                }
            >

            Include Preliminaries

        </label>


        <div
            id="preliminariesCostContainer"
            style="
                display:${
                    quotation.includePreliminaries
                        ? "block"
                        : "none"
                };
            "
        >

            <label>

                Preliminaries Cost (KES)

                <input
                    type="number"
                    id="preliminariesCost"
                    min="0"
                    step="0.01"
                    value="${
                        quotation.preliminariesCost
                    }"
                >

            </label>

        </div>

    </div>


    <!-- ===============================================
         AS-BUILT DRAWING
    ================================================ -->

    <div class="card">

        <h3>
            As-Built Drawing
        </h3>


        <label>

            <input
                type="checkbox"
                id="includeAsBuiltDrawing"
                ${
                    quotation.includeAsBuiltDrawing
                        ? "checked"
                        : ""
                }
            >

            Include As-Built Drawing

        </label>


        <div
            id="asBuiltDrawingCostContainer"
            style="
                display:${
                    quotation.includeAsBuiltDrawing
                        ? "block"
                        : "none"
                };
            "
        >

            <label>

                As-Built Drawing Cost (KES)

                <input
                    type="number"
                    id="asBuiltDrawingCost"
                    min="0"
                    step="0.01"
                    value="${
                        quotation.asBuiltDrawingCost
                    }"
                >

            </label>

        </div>

    </div>


    <!-- ===============================================
         CONTINUE TO CLIENT DETAILS
    ================================================ -->

    <button
        type="button"
        class="primary-button full-width"
        onclick="finishAdditionalItems()"
    >
        Continue to Client Details →
    </button>

`;


/* =====================================================
   ADDITIONAL ITEM LIVE CALCULATION
===================================================== */

document
    .getElementById(
        "extraItemQty"
    )
    ?.addEventListener(
        "input",
        calculateExtraItem
    );


document
    .getElementById(
        "extraItemPrice"
    )
    ?.addEventListener(
        "input",
        calculateExtraItem
    );


/* =====================================================
   PRELIMINARIES
===================================================== */

document
    .getElementById(
        "includePreliminaries"
    )
    ?.addEventListener(
        "change",
        function () {

            quotation.includePreliminaries =
                this.checked;


            const box =
                document.getElementById(
                    "preliminariesCostContainer"
                );


            if (box) {

                box.style.display =
                    this.checked
                        ? "block"
                        : "none";
            }

        }
    );


document
    .getElementById(
        "preliminariesCost"
    )
    ?.addEventListener(
        "input",
        function () {

            quotation.preliminariesCost =
                Number(this.value) || 0;

        }
    );


/* =====================================================
   AS-BUILT DRAWING
===================================================== */

document
    .getElementById(
        "includeAsBuiltDrawing"
    )
    ?.addEventListener(
        "change",
        function () {

            quotation.includeAsBuiltDrawing =
                this.checked;


            const box =
                document.getElementById(
                    "asBuiltDrawingCostContainer"
                );


            if (box) {

                box.style.display =
                    this.checked
                        ? "block"
                        : "none";
            }

        }
    );


document
    .getElementById(
        "asBuiltDrawingCost"
    )
    ?.addEventListener(
        "input",
        function () {

            quotation.asBuiltDrawingCost =
                Number(this.value) || 0;

        }
    );


renderAdditionalItemsPreview();
}

/* =========================================================
CALCULATE ADDITIONAL ITEM
========================================================= */

function calculateExtraItem() {

const qty =
    Number(
        document.getElementById(
            "extraItemQty"
        )?.value
    );


const price =
    Number(
        document.getElementById(
            "extraItemPrice"
        )?.value
    );


const total =
    qty * price;


const output =
    document.getElementById(
        "extraItemTotal"
    );


if (output) {

    output.textContent =
        money(total);

}
}

/* =========================================================
SAVE ADDITIONAL ITEM
========================================================= */

function saveExtraItem() {

const name =
    document.getElementById(
        "extraItemName"
    )?.value.trim();


const quantity =
    Number(
        document.getElementById(
            "extraItemQty"
        )?.value
    );


const unit =
    document.getElementById(
        "extraItemUnit"
    )?.value.trim() ||
    "lot";


const unitPrice =
    Number(
        document.getElementById(
            "extraItemPrice"
        )?.value
    );


if (
    !name ||
    !Number.isFinite(quantity) ||
    quantity <= 0 ||
    !Number.isFinite(unitPrice) ||
    unitPrice < 0
) {

    alert(
        "Please enter item name, quantity and valid unit price."
    );

    return;
}


quotation.additionalItems.push({

    name,

    quantity,

    unit,

    unitPrice,

    total:
        quantity *
        unitPrice

});


document.getElementById(
    "extraItemName"
).value = "";


document.getElementById(
    "extraItemQty"
).value = "";


document.getElementById(
    "extraItemUnit"
).value = "";


document.getElementById(
    "extraItemPrice"
).value = "";


document.getElementById(
    "extraItemTotal"
).textContent =
    "KES 0.00";


renderAdditionalItemsPreview();
}

/* =========================================================
ADDITIONAL ITEMS PREVIEW
========================================================= */

function renderAdditionalItemsPreview() {

const container =
    document.getElementById(
        "additionalItemsPreview"
    );


if (!container) return;


if (
    quotation.additionalItems.length === 0
) {

    container.innerHTML = `

        <div class="empty-message">

            No additional items added.

        </div>

    `;

    return;
}


container.innerHTML =

    quotation.additionalItems

        .map(
            (item, index) => `

                <div class="card">

                    <strong>

                        ${index + 1}.
                        ${escapeHTML(item.name)}

                    </strong>


                    <p>

                        ${number(item.quantity)}
                        ${escapeHTML(item.unit)}

                        ×

                        ${money(item.unitPrice)}

                    </p>


                    <p>

                        Total:

                        <strong>
                            ${money(item.total)}
                        </strong>

                    </p>


                    <button
                        type="button"
                        class="danger-button"
                        onclick="deleteAdditionalItem(${index})"
                    >
                        Delete
                    </button>

                </div>

            `
        )

        .join("");
}

function deleteAdditionalItem(index) {

if (
    !quotation.additionalItems[index]
) {

    return;
}


if (
    !confirm(
        "Delete this additional item?"
    )
) {

    return;
}


quotation.additionalItems.splice(
    index,
    1
);


renderAdditionalItemsPreview();
}

/* =========================================================
FINISH ADDITIONAL ITEMS
→ CLIENT DETAILS
========================================================= */

function finishAdditionalItems() {

const prelimCheckbox =
    document.getElementById(
        "includePreliminaries"
    );


const prelimCost =
    document.getElementById(
        "preliminariesCost"
    );


quotation.includePreliminaries =
    Boolean(
        prelimCheckbox?.checked
    );


quotation.preliminariesCost =
    Number(
        prelimCost?.value
    ) || 0;


const asBuiltCheckbox =
    document.getElementById(
        "includeAsBuiltDrawing"
    );


const asBuiltCost =
    document.getElementById(
        "asBuiltDrawingCost"
    );


quotation.includeAsBuiltDrawing =
    Boolean(
        asBuiltCheckbox?.checked
    );


quotation.asBuiltDrawingCost =
    Number(
        asBuiltCost?.value
    ) || 0;


/*
   IMPORTANT:
   Do NOT render quotation preview here.

   Client details must come first.
*/

showPage(13);
}

/* =========================================================
SECTION 5 OF 7
TOTALS + CLIENT DETAILS + FINAL PREVIEW
========================================================= */

/* =========================================================
TOTALS
========================================================= */

function getEquipmentTotal() {

return quotation.acPrices.reduce(

    (sum, item) =>

        sum +
        Number(
            item.total || 0
        ),

    0

);
}

function getCopperTotal() {

return (

    getTotalCopperLength() *

    Number(
        quotation.copperRate || 0
    )

);
}

function getDrainageTotal() {

return (

    getTotalDrainageLength() *

    Number(
        quotation.drainageRate || 0
    )

);
}

function getAdditionalItemsTotal() {

return quotation.additionalItems.reduce(

    (sum, item) =>

        sum +
        Number(
            item.total || 0
        ),

    0

);
}

function getPreliminariesTotal() {

if (
    !quotation.includePreliminaries
) {

    return 0;
}


return Number(
    quotation.preliminariesCost || 0
);
}

function getAsBuiltDrawingTotal() {

if (
    !quotation.includeAsBuiltDrawing
) {

    return 0;
}


return Number(
    quotation.asBuiltDrawingCost || 0
);
}

function getHVACTotal() {

return (

    getEquipmentTotal() +

    getCopperTotal() +

    getDrainageTotal() +

    getAdditionalItemsTotal()

);
}

function getQuotationSubtotal() {

return (

    getHVACTotal() +

    getPreliminariesTotal() +

    getAsBuiltDrawingTotal()

);
}

function getQuotationVAT() {

return (

    getQuotationSubtotal() *

    0.16

);
}

function getQuotationGrandTotal() {

return (

    getQuotationSubtotal() +

    getQuotationVAT()

);
}

/* =========================================================
CLIENT DETAILS
========================================================= */

function getClientDetails() {

quotation.clientName =
    document.getElementById(
        "clientName"
    )?.value.trim() || "";


quotation.installationLocation =
    document.getElementById(
        "installationLocation"
    )?.value.trim() || "";


quotation.salesPerson =
    document.getElementById(
        "salesPerson"
    )?.value.trim() || "";


quotation.salesPhone =
    document.getElementById(
        "salesPhone"
    )?.value.trim() || "";


quotation.salesEmail =
    document.getElementById(
        "salesEmail"
    )?.value.trim() || "";
}

/* =========================================================
CLIENT DETAILS → FINAL PREVIEW
========================================================= */

function proceedToQuotationPreview() {

getClientDetails();


if (
    !quotation.clientName
) {

    alert(
        "Please enter the client name."
    );

    return;
}


if (
    !quotation.installationLocation
) {

    alert(
        "Please enter the installation location."
    );

    return;
}


renderQuotationPreview();


showPage(12);
}

/* =========================================================
FINAL QUOTATION PREVIEW
========================================================= */

function renderQuotationPreview() {

const container =
    document.getElementById(
        "quotationPreview"
    );


if (!container) return;


const equipment =
    getEquipmentTotal();


const copper =
    getCopperTotal();


const drainage =
    getDrainageTotal();


const additional =
    getAdditionalItemsTotal();


const preliminaries =
    getPreliminariesTotal();


const asBuilt =
    getAsBuiltDrawingTotal();


const subtotal =
    getQuotationSubtotal();


const vat =
    getQuotationVAT();


const grandTotal =
    getQuotationGrandTotal();


container.innerHTML = `

    <!-- =================================================
         FINAL QUOTATION DOCUMENT
         ================================================= -->

    <div
        class="quotation-document"
        id="finalQuotationDocument"
    >

        <h1>
            QUOTATION
        </h1>


        <!-- CLIENT DETAILS -->

        <div class="quotation-section">

            <h3>
                CLIENT DETAILS
            </h3>


            <table
                class="client-table"
            >

                <tbody>

                    <tr>

                        <td>
                            CLIENT
                        </td>

                        <td>
                            ${escapeHTML(
                                quotation.clientName
                            )}
                        </td>

                    </tr>


                    <tr>

                        <td>
                            LOCATION
                        </td>

                        <td>
                            ${escapeHTML(
                                quotation.installationLocation
                            )}
                        </td>

                    </tr>


                    <tr>

                        <td>
                            SALES PERSON
                        </td>

                        <td>
                            ${escapeHTML(
                                quotation.salesPerson
                            )}
                        </td>

                    </tr>


                    <tr>

                        <td>
                            PHONE
                        </td>

                        <td>
                            ${escapeHTML(
                                quotation.salesPhone
                            )}
                        </td>

                    </tr>


                    <tr>

                        <td>
                            EMAIL
                        </td>

                        <td>
                            ${escapeHTML(
                                quotation.salesEmail
                            )}
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>


        <!-- EQUIPMENT -->

        <div class="quotation-section">

            <h3>
                1. EQUIPMENT
            </h3>


            <table>

                <thead>

                    <tr>

                        <th>
                            AC Capacity
                        </th>

                        <th class="number">
                            Qty
                        </th>

                        <th class="number">
                            Unit Price
                        </th>

                        <th class="number">
                            Total
                        </th>

                    </tr>

                </thead>


                <tbody>

                    ${
                        quotation.acPrices
                            .map(item => `

                                <tr>

                                    <td>
                                        ${Number(
                                            item.capacity
                                        ).toLocaleString()}
                                        BTU/hr
                                    </td>

                                    <td class="number">
                                        ${item.quantity}
                                    </td>

                                    <td class="number">
                                        ${money(
                                            item.unitPrice
                                        )}
                                    </td>

                                    <td class="number">
                                        ${money(
                                            item.total
                                        )}
                                    </td>

                                </tr>

                            `)
                            .join("")
                    }


                    <tr>

                        <td colspan="3">

                            <strong>
                                Equipment Total
                            </strong>

                        </td>

                        <td class="number">

                            <strong>
                                ${money(equipment)}
                            </strong>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>


        <!-- COPPER -->

        <div class="quotation-section">

            <h3>
                2. COPPER AND ACCESSORIES
            </h3>


            <table>

                <thead>

                    <tr>

                        <th>
                            Item
                        </th>

                        <th class="number">
                            Quantity
                        </th>

                        <th class="number">
                            Unit Price
                        </th>

                        <th class="number">
                            Total
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            Copper
                        </td>

                        <td class="number">
                            ${number(
                                getTotalCopperLength()
                            )}
                            m
                        </td>

                        <td class="number">
                            ${money(
                                quotation.copperRate
                            )}
                        </td>

                        <td class="number">
                            ${money(copper)}
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>


        <!-- DRAINAGE -->

        <div class="quotation-section">

            <h3>
                3. DRAINAGE AND ACCESSORIES
            </h3>


            <table>

                <thead>

                    <tr>

                        <th>
                            Item
                        </th>

                        <th class="number">
                            Quantity
                        </th>

                        <th class="number">
                            Unit Price
                        </th>

                        <th class="number">
                            Total
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            Drainage
                        </td>

                        <td class="number">
                            ${number(
                                getTotalDrainageLength()
                            )}
                            m
                        </td>

                        <td class="number">
                            ${money(
                                quotation.drainageRate
                            )}
                        </td>

                        <td class="number">
                            ${money(drainage)}
                        </td>

                    </tr>

                </tbody>

            </table>

        </div>


        <!-- ADDITIONAL ITEMS -->

        ${
            quotation.additionalItems.length > 0

                ? `

                    <div
                        class="quotation-section"
                    >

                        <h3>
                            4. ADDITIONAL WORKS
                        </h3>


                        <table>

                            <thead>

                                <tr>

                                    <th>
                                        Item
                                    </th>

                                    <th class="number">
                                        Quantity
                                    </th>

                                    <th class="number">
                                        Unit Price
                                    </th>

                                    <th class="number">
                                        Total
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                ${
                                    quotation
                                        .additionalItems
                                        .map(item => `

                                            <tr>

                                                <td>
                                                    ${escapeHTML(
                                                        item.name
                                                    )}
                                                </td>

                                                <td class="number">

                                                    ${number(
                                                        item.quantity
                                                    )}

                                                    ${escapeHTML(
                                                        item.unit
                                                    )}

                                                </td>

                                                <td class="number">
                                                    ${money(
                                                        item.unitPrice
                                                    )}
                                                </td>

                                                <td class="number">
                                                    ${money(
                                                        item.total
                                                    )}
                                                </td>

                                            </tr>

                                        `)
                                        .join("")
                                }

                            </tbody>

                        </table>

                    </div>

                `

                : ""
        }


        <!-- SUMMARY -->

        <div class="quotation-section">

            <h3>
                SUMMARY
            </h3>


            <table>

                <thead>

                    <tr>

                        <th>
                            Description
                        </th>

                        <th class="number">
                            Qty
                        </th>

                        <th class="number">
                            Unit Price
                        </th>

                        <th class="number">
                            Total
                        </th>

                    </tr>

                </thead>


                <tbody>

                    <tr>

                        <td>
                            Total HVAC Works
                        </td>

                        <td class="number">
                            1 lot
                        </td>

                        <td class="number">
                            ${money(
                                getHVACTotal()
                            )}
                        </td>

                        <td class="number">
                            ${money(
                                getHVACTotal()
                            )}
                        </td>

                    </tr>


                    ${
                        quotation.includePreliminaries
                            ? `

                                <tr>

                                    <td>
                                        Preliminaries
                                    </td>

                                    <td class="number">
                                        1 lot
                                    </td>

                                    <td class="number">
                                        ${money(
                                            quotation.preliminariesCost
                                        )}
                                    </td>

                                    <td class="number">
                                        ${money(
                                            preliminaries
                                        )}
                                    </td>

                                </tr>

                            `
                            : ""
                    }


                    ${
                        quotation.includeAsBuiltDrawing
                            ? `

                                <tr>

                                    <td>
                                        As-Built Drawing
                                    </td>

                                    <td class="number">
                                        1 lot
                                    </td>

                                    <td class="number">
                                        ${money(
                                            quotation.asBuiltDrawingCost
                                        )}
                                    </td>

                                    <td class="number">
                                        ${money(
                                            asBuilt
                                        )}
                                    </td>

                                </tr>

                            `
                            : ""
                    }

                </tbody>

            </table>


            <div
                style="
                    margin-top:15px;
                "
            >

                <p
                    style="
                        display:flex;
                        justify-content:space-between;
                    "
                >

                    <span>
                        Total before VAT:
                    </span>

                    <strong>
                        ${money(subtotal)}
                    </strong>

                </p>


                <p
                    style="
                        display:flex;
                        justify-content:space-between;
                    "
                >

                    <span>
                        VAT @ 16%:
                    </span>

                    <strong>
                        ${money(vat)}
                    </strong>

                </p>


                <div class="grand-total">

                    <span>
                        TOTAL COST INCLUSIVE OF 16% VAT
                    </span>

                    <span>
                        ${money(grandTotal)}
                    </span>

                </div>

            </div>

        </div>

    </div>


    <!-- =================================================
         PREVIEW BUTTONS

         IMPORTANT:
         These are OUTSIDE the quotation document.
         They therefore do NOT go into the PDF.
         ================================================= -->

    <div class="preview-controls">

        <button
            type="button"
            class="secondary-button"
            onclick="backToClientDetails()"
        >
            ← Back
        </button>


        <button
            type="button"
            class="primary-button"
            onclick="generateQuotation()"
        >
            Generate Quotation
        </button>

    </div>

`;
}

/* =========================================================
BACK TO CLIENT DETAILS
========================================================= */

function backToClientDetails() {

getClientDetails();


showPage(13);
}

/* =========================================================
SECTION 6 OF 7
PDF GENERATION
========================================================= */

/* =========================================================
IMAGE → DATA URL
========================================================= */

function imageToDataURL(url) {

return new Promise(
    (resolve, reject) => {

        const img =
            new Image();


        img.onload = function () {

            try {

                const canvas =
                    document.createElement(
                        "canvas"
                    );


                canvas.width =
                    img.naturalWidth;


                canvas.height =
                    img.naturalHeight;


                const ctx =
                    canvas.getContext(
                        "2d"
                    );


                ctx.drawImage(
                    img,
                    0,
                    0
                );


                resolve(
                    canvas.toDataURL(
                        "image/jpeg",
                        0.95
                    )
                );

            } catch (error) {

                reject(error);

            }

        };


        img.onerror =
            function () {

                reject(
                    new Error(
                        "Unable to load " +
                        url
                    )
                );

            };


        img.src = url;

    }
);
}

/* =========================================================
HEADER IMAGE
========================================================= */

function addHeaderImage(
doc,
headerData
) {

if (!headerData) {
    return;
}


const pageWidth =
    doc.internal.pageSize.getWidth();


try {

    doc.addImage(
        headerData,
        "JPEG",
        0,
        0,
        pageWidth,
        42
    );

} catch (error) {

    console.warn(
        "Header image could not be added.",
        error
    );

}
}

/* =========================================================
FOOTER IMAGE
========================================================= */

function addFooterToPage(
doc,
footerData,
pageNumber
) {

const pageWidth =
    doc.internal.pageSize.getWidth();


const pageHeight =
    doc.internal.pageSize.getHeight();


try {

    if (footerData) {

        doc.addImage(
            footerData,
            "JPEG",
            0,
            pageHeight - 35,
            pageWidth,
            35
        );

    }

} catch (error) {

    console.warn(
        "Footer image could not be added.",
        error
    );

}


doc.setFontSize(7);


doc.setTextColor(
    100,
    100,
    100
);


doc.text(
    `Page ${pageNumber}`,
    pageWidth - 25,
    pageHeight - 5
);
}

/* =========================================================
GENERATE QUOTATION
========================================================= */

async function generateQuotation() {

getClientDetails();


if (!quotation.clientName) {

    alert(
        "Please enter the client name."
    );

    showPage(13);

    return;
}


if (
    !quotation.installationLocation
) {

    alert(
        "Please enter the installation location."
    );

    showPage(13);

    return;
}


if (!jsPDFConstructor) {

    alert(
        "PDF library could not be loaded. Please check your internet connection and reload the page."
    );

    return;
}


let headerData = null;

let footerData = null;


/*
   Header.jpeg and footer.jpeg must be in
   the same GitHub Pages folder as index.html.

   If your files are named header.jpeg and footer.jpeg,
   keep the names exactly as shown below.
*/

try {

    headerData =
        await imageToDataURL(
            "header.jpeg"
        );

} catch (error) {

    console.warn(
        "header.jpeg could not be loaded.",
        error
    );

}


try {

    footerData =
        await imageToDataURL(
            "footer.jpeg"
        );

} catch (error) {

    console.warn(
        "footer.jpeg could not be loaded.",
        error
    );

}


try {

    createPDF(
        headerData,
        footerData
    );

} catch (error) {

    console.error(
        "PDF generation error:",
        error
    );


    alert(
        "The quotation could not be generated. Please check the browser console for details."
    );

}
}

/* =====================================================
   TITLE
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(18);


doc.setTextColor(
    7,
    89,
    133
);


doc.text(
    "QUOTATION",
    pageWidth / 2,
    y,
    {
        align:
            "center"
    }
);


y += 10;


/* =====================================================
   CLIENT DETAILS
===================================================== */

doc.setFontSize(9);


doc.setTextColor(
    30,
    41,
    59
);


const clientRows = [

    [
        "CLIENT:",
        quotation.clientName
    ],

    [
        "LOCATION:",
        quotation.installationLocation
    ],

    [
        "SALES PERSON:",
        quotation.salesPerson
    ],

    [
        "PHONE:",
        quotation.salesPhone
    ],

    [
        "EMAIL:",
        quotation.salesEmail
    ]

];


clientRows.forEach(
    row => {

        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.text(
            row[0],
            margin,
            y
        );


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.text(
            row[1] || "",
            margin + 32,
            y
        );


        y += 5;

    }
);


y += 5;


/* =====================================================
   EQUIPMENT
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.text(
    "1. EQUIPMENT",
    margin,
    y
);


y += 3;


const equipmentRows =
    quotation.acPrices.map(
        item => [

            `${Number(
                item.capacity
            ).toLocaleString()} BTU/hr`,

            item.quantity,

            money(
                item.unitPrice
            ),

            money(
                item.total
            )

        ]
    );


doc.autoTable({

    startY:
        y,

    head: [[

        "AC Capacity",

        "Qty",

        "Unit Price",

        "Total"

    ]],

    body:
        equipmentRows,

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255,

        fontStyle:
            "bold"

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    columnStyles: {

        1: {
            halign:
                "right"
        },

        2: {
            halign:
                "right"
        },

        3: {
            halign:
                "right"
        }

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   COPPER
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.text(
    "2. COPPER AND ACCESSORIES",
    margin,
    y
);


y += 3;


doc.autoTable({

    startY:
        y,

    head: [[

        "Item",

        "Quantity",

        "Unit Price",

        "Total"

    ]],

    body: [[

        "Copper",

        `${number(
            getTotalCopperLength()
        )} m`,

        money(
            quotation.copperRate
        ),

        money(
            getCopperTotal()
        )

    ]],

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   DRAINAGE
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.text(
    "3. DRAINAGE AND ACCESSORIES",
    margin,
    y
);


y += 3;


doc.autoTable({

    startY:
        y,

    head: [[

        "Item",

        "Quantity",

        "Unit Price",

        "Total"

    ]],

    body: [[

        "Drainage",

        `${number(
            getTotalDrainageLength()
        )} m`,

        money(
            quotation.drainageRate
        ),

        money(
            getDrainageTotal()
        )

    ]],

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   ADDITIONAL WORKS
===================================================== */

if (
    quotation.additionalItems.length >
    0
) {

    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(11);


    doc.text(
        "4. ADDITIONAL WORKS",
        margin,
        y
    );


    y += 3;


    const rows =
        quotation.additionalItems.map(
            item => [

                item.name,

                `${number(
                    item.quantity
                )} ${item.unit}`,

                money(
                    item.unitPrice
                ),

                money(
                    item.total
                )

            ]
        );


    doc.autoTable({

        startY:
            y,

        head: [[

            "Item",

            "Quantity",

            "Unit Price",

            "Total"

        ]],

        body:
            rows,

        theme:
            "grid",

        headStyles: {

            fillColor: [
                7,
                89,
                133
            ],

            textColor:
                255

        },

        styles: {

            fontSize:
                8,

            cellPadding:
                2.5

        },

        margin: {

            left:
                margin,

            right:
                margin,

            bottom:
                footerHeight

        }

    });


    y =
        doc.lastAutoTable.finalY +
        8;

}
/* =========================================================
SECTION 7 OF 7
PDF SUMMARY + TERMS + FOOTERS + RESET
========================================================= */

/* =========================================================
CONTINUE CREATE PDF
========================================================= */

/*
This function is intentionally separate so that the
complete script can be pasted in seven manageable parts.
*/

function createPDFSummaryAndFinish(
doc,
headerData,
footerData,
pageWidth,
pageHeight,
margin,
headerHeight,
footerHeight,
y
) {

const hvacWorks =
    getHVACTotal();


const preliminaries =
    getPreliminariesTotal();


const asBuiltDrawing =
    getAsBuiltDrawingTotal();


const subtotal =
    getQuotationSubtotal();


const vat =
    getQuotationVAT();


const grandTotal =
    getQuotationGrandTotal();


/* =====================================================
   SUMMARY
===================================================== */

if (
    y >
    pageHeight -
    footerHeight -
    60
) {

    doc.addPage();


    addHeaderImage(
        doc,
        headerData
    );


    y =
        headerHeight + 8;
}


doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(12);


doc.setTextColor(
    7,
    89,
    133
);


doc.text(
    "SUMMARY",
    margin,
    y
);


y += 4;


const summaryRows = [];


summaryRows.push([

    "Total HVAC Works",

    "1 lot",

    money(hvacWorks),

    money(hvacWorks)

]);


if (
    quotation.includePreliminaries
) {

    summaryRows.push([

        "Preliminaries",

        "1 lot",

        money(
            quotation.preliminariesCost
        ),

        money(
            preliminaries
        )

    ]);

}


if (
    quotation.includeAsBuiltDrawing
) {

    summaryRows.push([

        "As-Built Drawing",

        "1 lot",

        money(
            quotation.asBuiltDrawingCost
        ),

        money(
            asBuiltDrawing
        )

    ]);

}


doc.autoTable({

    startY:
        y,

    head: [[

        "Description",

        "Qty",

        "Unit Price",

        "Total"

    ]],

    body:
        summaryRows,

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   VAT
===================================================== */

doc.setFont(
    "helvetica",
    "normal"
);


doc.setFontSize(10);


doc.setTextColor(
    30,
    41,
    59
);


doc.text(
    "Total before VAT:",
    margin,
    y
);


doc.text(
    money(subtotal),
    pageWidth - margin,
    y,
    {
        align:
            "right"
    }
);


y += 7;


doc.text(
    "VAT @ 16%:",
    margin,
    y
);


doc.text(
    money(vat),
    pageWidth - margin,
    y,
    {
        align:
            "right"
    }
);


y += 9;


/* =====================================================
   GRAND TOTAL
===================================================== */

doc.setFillColor(
    7,
    89,
    133
);


doc.roundedRect(

    margin,

    y - 5,

    pageWidth -
        margin * 2,

    17,

    2,

    2,

    "F"

);


doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.setTextColor(
    255,
    255,
    255
);


doc.text(

    "TOTAL COST INCLUSIVE OF 16% VAT",

    margin + 4,

    y + 5

);


doc.text(

    money(grandTotal),

    pageWidth -
        margin -
        4,

    y + 5,

    {
        align:
            "right"
    }

);


y += 23;


/* =====================================================
   TERMS AND CONDITIONS
===================================================== */

if (
    y >
    pageHeight -
    footerHeight -
    60
) {

    doc.addPage();


    addHeaderImage(
        doc,
        headerData
    );


    y =
        headerHeight + 8;
}


doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.setTextColor(
    7,
    89,
    133
);


doc.text(
    "TERMS AND CONDITIONS OF SALES",
    margin,
    y
);


y += 6;


const terms = [

    [
        "Terms of payment:",
        "100% advance payment payable to HOTPOINT APPLIANCES LTD or as per approved payment terms."
    ],

    [
        "Warranty:",
        "Two years warranty on equipment. The warranty shall be applicable as per our warranty clause."
    ],

    [
        "Delivery timelines:",
        "8-12 weeks upon confirmation of order and upon reception of advance payment."
    ],

    [
        "Quotation validity:",
        "Our quotation is valid for a period of 14 days."
    ],

    [
        "Note - Exclusions:",
        "Our scope of work is limited to as per the above priced BOQ. Any materials not mentioned above are not in our scope."
    ],

    [
        "Other exclusions:",
        "Scaffolding, Glass cutting, electrical and masonry works (Wall chase, drilling and work on false ceiling)."
    ],

    [
        "Electrical works:",
        "All the electrical works related to powering of the Air Conditioner are to be done by the client. However, we will guide on the same."
    ],

    [
        "Support required:",
        "Access to site, water and electricity. Safe custody of equipment, tools and installation materials at site."
    ],

    [
        "Operating temperature:",
        "Kindly note that the system's ideal operating temperature is minimum of 18-30 Degrees Celsius."
    ]

];


doc.autoTable({

    startY:
        y,

    body:
        terms,

    theme:
        "plain",

    styles: {

        fontSize:
            7.5,

        cellPadding:
            2,

        textColor: [
            40,
            40,
            40
        ],

        valign:
            "top"

    },

    columnStyles: {

        0: {

            fontStyle:
                "bold",

            cellWidth:
                36

        },

        1: {

            cellWidth:
                pageWidth -
                margin * 2 -
                36

        }

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


/* =====================================================
   FOOTERS
===================================================== */

const totalPages =
    doc.internal.getNumberOfPages();


for (
    let i = 1;
    i <= totalPages;
    i++
) {

    doc.setPage(i);


    addFooterToPage(
        doc,
        footerData,
        i
    );

}


/* =====================================================
   SAVE PDF
===================================================== */

const safeClientName =
    quotation.clientName

        .replace(
            /[^a-z0-9]/gi,
            "_"
        );


const filename =
    `HVAC_Quotation_${
        safeClientName ||
        "Client"
    }.pdf`;


doc.save(filename);


/* =====================================================
   SUCCESS
===================================================== */

showPage(14);
}

/* =========================================================
OVERRIDE / COMPLETE PDF CONTINUATION
========================================================= */

/*
Replace the createPDF function from Section 6 with this
final version. It uses the same PDF layout but calls the
summary function above.
*/

function createPDF(
headerData,
footerData
) {

const doc =
    new jsPDFConstructor({

        orientation:
            "portrait",

        unit:
            "mm",

        format:
            "a4"

    });


const pageWidth =
    doc.internal.pageSize.getWidth();


const pageHeight =
    doc.internal.pageSize.getHeight();


const margin = 12;

const headerHeight = 45;

const footerHeight = 38;


addHeaderImage(
    doc,
    headerData
);


let y =
    headerHeight + 5;


/* =====================================================
   TITLE
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(18);


doc.setTextColor(
    7,
    89,
    133
);


doc.text(
    "QUOTATION",
    pageWidth / 2,
    y,
    {
        align:
            "center"
    }
);


y += 10;


/* =====================================================
   CLIENT DETAILS
===================================================== */

doc.setFontSize(9);


doc.setTextColor(
    30,
    41,
    59
);


const clientRows = [

    [
        "CLIENT:",
        quotation.clientName
    ],

    [
        "LOCATION:",
        quotation.installationLocation
    ],

    [
        "SALES PERSON:",
        quotation.salesPerson
    ],

    [
        "PHONE:",
        quotation.salesPhone
    ],

    [
        "EMAIL:",
        quotation.salesEmail
    ]

];


clientRows.forEach(
    row => {

        doc.setFont(
            "helvetica",
            "bold"
        );


        doc.text(
            row[0],
            margin,
            y
        );


        doc.setFont(
            "helvetica",
            "normal"
        );


        doc.text(
            row[1] || "",
            margin + 32,
            y
        );


        y += 5;

    }
);


y += 5;


/* =====================================================
   EQUIPMENT
===================================================== */

doc.setFont(
    "helvetica",
    "bold"
);


doc.setFontSize(11);


doc.text(
    "1. EQUIPMENT",
    margin,
    y
);


y += 3;


doc.autoTable({

    startY:
        y,

    head: [[
        "AC Capacity",
        "Qty",
        "Unit Price",
        "Total"
    ]],

    body:

        quotation.acPrices.map(
            item => [

                `${Number(
                    item.capacity
                ).toLocaleString()} BTU/hr`,

                item.quantity,

                money(
                    item.unitPrice
                ),

                money(
                    item.total
                )

            ]
        ),

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    columnStyles: {

        1: {
            halign:
                "right"
        },

        2: {
            halign:
                "right"
        },

        3: {
            halign:
                "right"
        }

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   COPPER
===================================================== */

doc.text(
    "2. COPPER AND ACCESSORIES",
    margin,
    y
);


y += 3;


doc.autoTable({

    startY:
        y,

    head: [[
        "Item",
        "Quantity",
        "Unit Price",
        "Total"
    ]],

    body: [[

        "Copper",

        `${number(
            getTotalCopperLength()
        )} m`,

        money(
            quotation.copperRate
        ),

        money(
            getCopperTotal()
        )

    ]],

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   DRAINAGE
===================================================== */

doc.text(
    "3. DRAINAGE AND ACCESSORIES",
    margin,
    y
);


y += 3;


doc.autoTable({

    startY:
        y,

    head: [[
        "Item",
        "Quantity",
        "Unit Price",
        "Total"
    ]],

    body: [[

        "Drainage",

        `${number(
            getTotalDrainageLength()
        )} m`,

        money(
            quotation.drainageRate
        ),

        money(
            getDrainageTotal()
        )

    ]],

    theme:
        "grid",

    headStyles: {

        fillColor: [
            7,
            89,
            133
        ],

        textColor:
            255

    },

    styles: {

        fontSize:
            8,

        cellPadding:
            2.5

    },

    margin: {

        left:
            margin,

        right:
            margin,

        bottom:
            footerHeight

    }

});


y =
    doc.lastAutoTable.finalY +
    8;


/* =====================================================
   ADDITIONAL ITEMS
===================================================== */

if (
    quotation.additionalItems.length
) {

    doc.text(
        "4. ADDITIONAL WORKS",
        margin,
        y
    );


    y += 3;


    doc.autoTable({

        startY:
            y,

        head: [[
            "Item",
            "Quantity",
            "Unit Price",
            "Total"
        ]],

        body:

            quotation.additionalItems.map(
                item => [

                    item.name,

                    `${number(
                        item.quantity
                    )} ${item.unit}`,

                    money(
                        item.unitPrice
                    ),

                    money(
                        item.total
                    )

                ]
            ),

        theme:
            "grid",

        headStyles: {

            fillColor: [
                7,
                89,
                133
            ],

            textColor:
                255

        },

        styles: {

            fontSize:
                8,

            cellPadding:
                2.5

        },

        margin: {

            left:
                margin,

            right:
                margin,

            bottom:
                footerHeight

        }

    });


    y =
        doc.lastAutoTable.finalY +
        8;
}


/* =====================================================
   SUMMARY + TERMS + FOOTER + SAVE
===================================================== */

createPDFSummaryAndFinish(

    doc,

    headerData,

    footerData,

    pageWidth,

    pageHeight,

    margin,

    headerHeight,

    footerHeight,

    y

);
}

/* =========================================================
START NEW QUOTATION
========================================================= */

function startNewQuotation() {

quotation = {

    rooms: [],

    copperRate: 3200,

    drainageRate: 0,

    additionalItems: [],

    includePreliminaries: false,

    preliminariesCost: 15000,

    includeAsBuiltDrawing: false,

    asBuiltDrawingCost: 5000,

    acPrices: [],

    clientName: "",

    installationLocation: "",

    salesPerson: "",

    salesPhone: "",

    salesEmail: ""

};


const roomContainer =
    document.getElementById(
        "roomInputContainer"
    );


if (roomContainer) {

    roomContainer.innerHTML = `

        <div class="input-row room-input-row">

            <input
                type="text"
                class="room-name-input"
                placeholder="e.g. Living Room"
            >

            <button
                type="button"
                class="remove-input"
                onclick="removeRoomInput(this)"
            >
                ×
            </button>

        </div>

    `;

}


[

    "clientName",

    "installationLocation",

    "salesPerson",

    "salesPhone",

    "salesEmail"

].forEach(id => {

    const element =
        document.getElementById(id);


    if (element) {

        element.value = "";

    }

});


showPage(1);
}

/* =========================================================
PAGE INITIALIZATION
========================================================= */

document.addEventListener(
"DOMContentLoaded",
function () {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (year) {

        year.textContent =
            new Date()
                .getFullYear();

    }


    showPage(1);

}
);


Close
