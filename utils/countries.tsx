"use client";

import type { HTMLAttributes } from "react";
import type { SelectItemType } from "@/components/base/select/select";

/**
 * List of countries with their respective country code, flag, phone code, and phone mask.
 */
export const countries = [
    {
        name: "Afghanistan",
        code: "AF",
        flag: "https://www.untitledui.com/images/flags/AF.svg",
        phoneCode: "93",
        phoneMask: "+93-##-###-####",
    },
    {
        name: "Albania",
        code: "AL",
        flag: "https://www.untitledui.com/images/flags/AL.svg",
        phoneCode: "355",
        phoneMask: "+355 (###) ###-###",
    },
    {
        name: "Algeria",
        code: "DZ",
        flag: "https://www.untitledui.com/images/flags/DZ.svg",
        phoneCode: "213",
        phoneMask: "+213-##-###-####",
    },
    {
        name: "Andorra",
        code: "AD",
        flag: "https://www.untitledui.com/images/flags/AD.svg",
        phoneCode: "376",
        phoneMask: "+376-###-###",
    },
    {
        name: "Angola",
        code: "AO",
        flag: "https://www.untitledui.com/images/flags/AO.svg",
        phoneCode: "244",
        phoneMask: "+244 (###) ###-###",
    },
    {
        name: "Antigua and Barbuda",
        code: "AG",
        flag: "https://www.untitledui.com/images/flags/AG.svg",
        phoneCode: "+1-268",
        phoneMask: "+1 (268) ###-####",
    },
    {
        name: "Argentina",
        code: "AR",
        flag: "https://www.untitledui.com/images/flags/AR.svg",
        phoneCode: "54",
        phoneMask: "+54 (###) ###-####",
    },
    {
        name: "Armenia",
        code: "AM",
        flag: "https://www.untitledui.com/images/flags/AM.svg",
        phoneCode: "374",
        phoneMask: "+374-##-###-###",
    },
    {
        name: "Australia",
        code: "AU",
        flag: "https://www.untitledui.com/images/flags/AU.svg",
        phoneCode: "61",
        phoneMask: "+61-#-####-####",
    },
    {
        name: "Austria",
        code: "AT",
        flag: "https://www.untitledui.com/images/flags/AT.svg",
        phoneCode: "43",
        phoneMask: "+43 (###) ###-####",
    },
    {
        name: "Azerbaijan",
        code: "AZ",
        flag: "https://www.untitledui.com/images/flags/AZ.svg",
        phoneCode: "994",
        phoneMask: "+994-##-###-##-##",
    },
    {
        name: "Bahamas",
        code: "BS",
        flag: "https://www.untitledui.com/images/flags/BS.svg",
        phoneCode: "+1-242",
        phoneMask: "+1 (242) ###-####",
    },
    {
        name: "Bahrain",
        code: "BH",
        flag: "https://www.untitledui.com/images/flags/BH.svg",
        phoneCode: "973",
        phoneMask: "+973-####-####",
    },
    {
        name: "Bangladesh",
        code: "BD",
        flag: "https://www.untitledui.com/images/flags/BD.svg",
        phoneCode: "880",
        phoneMask: "+880-##-###-###",
    },
    {
        name: "Barbados",
        code: "BB",
        flag: "https://www.untitledui.com/images/flags/BB.svg",
        phoneCode: "+1-246",
        phoneMask: "+1 (246) ###-####",
    },
    {
        name: "Belarus",
        code: "BY",
        flag: "https://www.untitledui.com/images/flags/BY.svg",
        phoneCode: "375",
        phoneMask: "+375 (##) ###-##-##",
    },
    {
        name: "Belgium",
        code: "BE",
        flag: "https://www.untitledui.com/images/flags/BE.svg",
        phoneCode: "32",
        phoneMask: "+32 (###) ###-###",
    },
    {
        name: "Belize",
        code: "BZ",
        flag: "https://www.untitledui.com/images/flags/BZ.svg",
        phoneCode: "501",
        phoneMask: "+501-###-####",
    },
    {
        name: "Benin",
        code: "BJ",
        flag: "https://www.untitledui.com/images/flags/BJ.svg",
        phoneCode: "229",
        phoneMask: "+229-##-##-####",
    },
    {
        name: "Bhutan",
        code: "BT",
        flag: "https://www.untitledui.com/images/flags/BT.svg",
        phoneCode: "975",
        phoneMask: "+975-#-###-###",
    },
    {
        name: "Bolivia",
        code: "BO",
        flag: "https://www.untitledui.com/images/flags/BO.svg",
        phoneCode: "591",
        phoneMask: "+591-#-###-####",
    },
    {
        name: "Bosnia and Herzegovina",
        code: "BA",
        flag: "https://www.untitledui.com/images/flags/BA.svg",
        phoneCode: "387",
        phoneMask: "+387-##-####",
    },
    {
        name: "Botswana",
        code: "BW",
        flag: "https://www.untitledui.com/images/flags/BW.svg",
        phoneCode: "267",
        phoneMask: "+267-##-###-###",
    },
    {
        name: "Brazil",
        code: "BR",
        flag: "https://www.untitledui.com/images/flags/BR.svg",
        phoneCode: "55",
        phoneMask: "+55 (##) 9####-####",
    },
    {
        name: "Brunei",
        code: "BN",
        flag: "https://www.untitledui.com/images/flags/BN.svg",
        phoneCode: "673",
        phoneMask: "+673-###-####",
    },
    {
        name: "Bulgaria",
        code: "BG",
        flag: "https://www.untitledui.com/images/flags/BG.svg",
        phoneCode: "359",
        phoneMask: "+359 (###) ###-###",
    },
    {
        name: "Burkina Faso",
        code: "BF",
        flag: "https://www.untitledui.com/images/flags/BF.svg",
        phoneCode: "226",
        phoneMask: "+226-##-##-####",
    },
    {
        name: "Burundi",
        code: "BI",
        flag: "https://www.untitledui.com/images/flags/BI.svg",
        phoneCode: "257",
        phoneMask: "+257-##-##-####",
    },
    {
        name: "Cambodia",
        code: "KH",
        flag: "https://www.untitledui.com/images/flags/KH.svg",
        phoneCode: "855",
        phoneMask: "+855-##-###-###",
    },
    {
        name: "Cameroon",
        code: "CM",
        flag: "https://www.untitledui.com/images/flags/CM.svg",
        phoneCode: "237",
        phoneMask: "+237-####-####",
    },
    {
        name: "Canada",
        code: "CA",
        flag: "https://www.untitledui.com/images/flags/CA.svg",
        phoneCode: "1",
        phoneMask: "+1 (###) ###-####",
    },
    {
        name: "Central African Republic",
        code: "CF",
        flag: "https://www.untitledui.com/images/flags/CF.svg",
        phoneCode: "236",
        phoneMask: "+236-##-##-####",
    },
    {
        name: "Chad",
        code: "TD",
        flag: "https://www.untitledui.com/images/flags/TD.svg",
        phoneCode: "235",
        phoneMask: "+235-##-##-##-##",
    },
    {
        name: "Chile",
        code: "CL",
        flag: "https://www.untitledui.com/images/flags/CL.svg",
        phoneCode: "56",
        phoneMask: "+56-#-####-####",
    },
    {
        name: "China",
        code: "CN",
        flag: "https://www.untitledui.com/images/flags/CN.svg",
        phoneCode: "86",
        phoneMask: "+86-##-#####-#####",
    },
    {
        name: "Colombia",
        code: "CO",
        flag: "https://www.untitledui.com/images/flags/CO.svg",
        phoneCode: "57",
        phoneMask: "+57 (###) ###-####",
    },
    {
        name: "Comoros",
        code: "KM",
        flag: "https://www.untitledui.com/images/flags/KM.svg",
        phoneCode: "269",
        phoneMask: "+269-##-#####",
    },
    {
        name: "Costa Rica",
        code: "CR",
        flag: "https://www.untitledui.com/images/flags/CR.svg",
        phoneCode: "506",
        phoneMask: "+506-####-####",
    },
    {
        name: "Croatia",
        code: "HR",
        flag: "https://www.untitledui.com/images/flags/HR.svg",
        phoneCode: "385",
        phoneMask: "+385-##-###-###",
    },
    {
        name: "Cuba",
        code: "CU",
        flag: "https://www.untitledui.com/images/flags/CU.svg",
        phoneCode: "53",
        phoneMask: "+53-#-###-####",
    },
    {
        name: "Cyprus",
        code: "CY",
        flag: "https://www.untitledui.com/images/flags/CY.svg",
        phoneCode: "357",
        phoneMask: "+357-##-###-###",
    },
    {
        name: "Czech Republic",
        code: "CZ",
        flag: "https://www.untitledui.com/images/flags/CZ.svg",
        phoneCode: "420",
        phoneMask: "+420 (###) ###-###",
    },
    {
        name: "Democratic Republic of the Congo",
        code: "CD",
        flag: "https://www.untitledui.com/images/flags/CD.svg",
        phoneCode: "243",
        phoneMask: "+243 (###) ###-###",
    },
    {
        name: "Denmark",
        code: "DK",
        flag: "https://www.untitledui.com/images/flags/DK.svg",
        phoneCode: "45",
        phoneMask: "+45-##-##-##-##",
    },
    {
        name: "Djibouti",
        code: "DJ",
        flag: "https://www.untitledui.com/images/flags/DJ.svg",
        phoneCode: "253",
        phoneMask: "+253-##-##-##-##",
    },
    {
        name: "Dominica",
        code: "DM",
        flag: "https://www.untitledui.com/images/flags/DM.svg",
        phoneCode: "+1-767",
        phoneMask: "+1 (767) ###-####",
    },
    {
        name: "Dominican Republic",
        code: "DO",
        flag: "https://www.untitledui.com/images/flags/DO.svg",
        phoneCode: "+1-809 and 1-829",
        phoneMask: "+1 (849) ###-####",
    },
    {
        name: "East Timor",
        code: "TL",
        flag: "https://www.untitledui.com/images/flags/TL.svg",
        phoneCode: "670",
        phoneMask: "+670-78#-#####",
    },
    {
        name: "Ecuador",
        code: "EC",
        flag: "https://www.untitledui.com/images/flags/EC.svg",
        phoneCode: "593",
        phoneMask: "+593-#-###-####",
    },
    {
        name: "Egypt",
        code: "EG",
        flag: "https://www.untitledui.com/images/flags/EG.svg",
        phoneCode: "20",
        phoneMask: "+20 (###) ###-####",
    },
    {
        name: "El Salvador",
        code: "SV",
        flag: "https://www.untitledui.com/images/flags/SV.svg",
        phoneCode: "503",
        phoneMask: "+503-##-##-####",
    },
    {
        name: "Equatorial Guinea",
        code: "GQ",
        flag: "https://www.untitledui.com/images/flags/GQ.svg",
        phoneCode: "240",
        phoneMask: "+240-##-###-####",
    },
    {
        name: "Eritrea",
        code: "ER",
        flag: "https://www.untitledui.com/images/flags/ER.svg",
        phoneCode: "291",
        phoneMask: "+291-#-###-###",
    },
    {
        name: "Estonia",
        code: "EE",
        flag: "https://www.untitledui.com/images/flags/EE.svg",
        phoneCode: "372",
        phoneMask: "+372-###-####",
    },
    {
        name: "Eswatini",
        code: "SZ",
        flag: "https://www.untitledui.com/images/flags/SZ.svg",
        phoneCode: "268",
        phoneMask: "+268-##-##-####",
    },
    {
        name: "Ethiopia",
        code: "ET",
        flag: "https://www.untitledui.com/images/flags/ET.svg",
        phoneCode: "251",
        phoneMask: "+251-##-###-####",
    },
    {
        name: "Fiji",
        code: "FJ",
        flag: "https://www.untitledui.com/images/flags/FJ.svg",
        phoneCode: "679",
        phoneMask: "+679-##-#####",
    },
    {
        name: "Finland",
        code: "FI",
        flag: "https://www.untitledui.com/images/flags/FI.svg",
        phoneCode: "358",
        phoneMask: "+358 (###) ###-##-##",
    },
    {
        name: "France",
        code: "FR",
        flag: "https://www.untitledui.com/images/flags/FR.svg",
        phoneCode: "33",
        phoneMask: "+590 (###) ###-###",
    },
    {
        name: "Gabon",
        code: "GA",
        flag: "https://www.untitledui.com/images/flags/GA.svg",
        phoneCode: "241",
        phoneMask: "+241-#-##-##-##",
    },
    {
        name: "Gambia",
        code: "GM",
        flag: "https://www.untitledui.com/images/flags/GM.svg",
        phoneCode: "220",
        phoneMask: "+220 (###) ##-##",
    },
    {
        name: "Georgia",
        code: "GE",
        flag: "https://www.untitledui.com/images/flags/GE.svg",
        phoneCode: "995",
        phoneMask: "+995 (###) ###-###",
    },
    {
        name: "Germany",
        code: "DE",
        flag: "https://www.untitledui.com/images/flags/DE.svg",
        phoneCode: "49",
        phoneMask: "+49-###-###",
    },
    {
        name: "Ghana",
        code: "GH",
        flag: "https://www.untitledui.com/images/flags/GH.svg",
        phoneCode: "233",
        phoneMask: "+233 (###) ###-###",
    },
    {
        name: "Greece",
        code: "GR",
        flag: "https://www.untitledui.com/images/flags/GR.svg",
        phoneCode: "30",
        phoneMask: "+30 (###) ###-####",
    },
    {
        name: "Grenada",
        code: "GD",
        flag: "https://www.untitledui.com/images/flags/GD.svg",
        phoneCode: "+1-473",
        phoneMask: "+1 (473) ###-####",
    },
    {
        name: "Guatemala",
        code: "GT",
        flag: "https://www.untitledui.com/images/flags/GT.svg",
        phoneCode: "502",
        phoneMask: "+502-#-###-####",
    },
    {
        name: "Guinea",
        code: "GN",
        flag: "https://www.untitledui.com/images/flags/GN.svg",
        phoneCode: "224",
        phoneMask: "+224-##-###-###",
    },
    {
        name: "Guinea-Bissau",
        code: "GW",
        flag: "https://www.untitledui.com/images/flags/GW.svg",
        phoneCode: "245",
        phoneMask: "+245-#-######",
    },
    {
        name: "Guyana",
        code: "GY",
        flag: "https://www.untitledui.com/images/flags/GY.svg",
        phoneCode: "592",
        phoneMask: "+592-###-####",
    },
    {
        name: "Haiti",
        code: "HT",
        flag: "https://www.untitledui.com/images/flags/HT.svg",
        phoneCode: "509",
        phoneMask: "+509-##-##-####",
    },
    {
        name: "Honduras",
        code: "HN",
        flag: "https://www.untitledui.com/images/flags/HN.svg",
        phoneCode: "504",
        phoneMask: "+504-####-####",
    },
    {
        name: "Hungary",
        code: "HU",
        flag: "https://www.untitledui.com/images/flags/HU.svg",
        phoneCode: "36",
        phoneMask: "+36 (###) ###-###",
    },
    {
        name: "Iceland",
        code: "IS",
        flag: "https://www.untitledui.com/images/flags/IS.svg",
        phoneCode: "354",
        phoneMask: "+354-###-####",
    },
    {
        name: "India",
        code: "IN",
        flag: "https://www.untitledui.com/images/flags/IN.svg",
        phoneCode: "91",
        phoneMask: "+91 (####) ###-###",
    },
    {
        name: "Indonesia",
        code: "ID",
        flag: "https://www.untitledui.com/images/flags/ID.svg",
        phoneCode: "62",
        phoneMask: "+62 (8##) ###-##-###",
    },
    {
        name: "Iran",
        code: "IR",
        flag: "https://www.untitledui.com/images/flags/IR.svg",
        phoneCode: "98",
        phoneMask: "+98 (###) ###-####",
    },
    {
        name: "Iraq",
        code: "IQ",
        flag: "https://www.untitledui.com/images/flags/IQ.svg",
        phoneCode: "964",
        phoneMask: "+964 (###) ###-####",
    },
    {
        name: "Ireland",
        code: "IE",
        flag: "https://www.untitledui.com/images/flags/IE.svg",
        phoneCode: "353",
        phoneMask: "+353 (###) ###-###",
    },
    {
        name: "Israel",
        code: "IL",
        flag: "https://www.untitledui.com/images/flags/IL.svg",
        phoneCode: "972",
        phoneMask: "+972-#-###-####",
    },
    {
        name: "Italy",
        code: "IT",
        flag: "https://www.untitledui.com/images/flags/IT.svg",
        phoneCode: "39",
        phoneMask: "+39 (###) ####-###",
    },
    {
        name: "Jamaica",
        code: "JM",
        flag: "https://www.untitledui.com/images/flags/JM.svg",
        phoneCode: "+1-876",
        phoneMask: "+1 (876) ###-####",
    },
    {
        name: "Japan",
        code: "JP",
        flag: "https://www.untitledui.com/images/flags/JP.svg",
        phoneCode: "81",
        phoneMask: "+81 (###) ###-###",
    },
    {
        name: "Jordan",
        code: "JO",
        flag: "https://www.untitledui.com/images/flags/JO.svg",
        phoneCode: "962",
        phoneMask: "+962-#-####-####",
    },
    {
        name: "Kazakhstan",
        code: "KZ",
        flag: "https://www.untitledui.com/images/flags/KZ.svg",
        phoneCode: "7",
        phoneMask: "+7 (7##) ###-##-##",
    },
    {
        name: "Kenya",
        code: "KE",
        flag: "https://www.untitledui.com/images/flags/KE.svg",
        phoneCode: "254",
        phoneMask: "+254-###-######",
    },
    {
        name: "Kiribati",
        code: "KI",
        flag: "https://www.untitledui.com/images/flags/KI.svg",
        phoneCode: "686",
        phoneMask: "+686-##-###",
    },
    {
        name: "Kuwait",
        code: "KW",
        flag: "https://www.untitledui.com/images/flags/KW.svg",
        phoneCode: "965",
        phoneMask: "+965-####-####",
    },
    {
        name: "Kyrgyzstan",
        code: "KG",
        flag: "https://www.untitledui.com/images/flags/KG.svg",
        phoneCode: "996",
        phoneMask: "+996 (###) ###-###",
    },
    {
        name: "Laos",
        code: "LA",
        flag: "https://www.untitledui.com/images/flags/LA.svg",
        phoneCode: "856",
        phoneMask: "+856-##-###-###",
    },
    {
        name: "Latvia",
        code: "LV",
        flag: "https://www.untitledui.com/images/flags/LV.svg",
        phoneCode: "371",
        phoneMask: "+371-##-###-###",
    },
    {
        name: "Lebanon",
        code: "LB",
        flag: "https://www.untitledui.com/images/flags/LB.svg",
        phoneCode: "961",
        phoneMask: "+961-#-###-###",
    },
    {
        name: "Lesotho",
        code: "LS",
        flag: "https://www.untitledui.com/images/flags/LS.svg",
        phoneCode: "266",
        phoneMask: "+266-#-###-####",
    },
    {
        name: "Liberia",
        code: "LR",
        flag: "https://www.untitledui.com/images/flags/LR.svg",
        phoneCode: "231",
        phoneMask: "+231-##-###-###",
    },
    {
        name: "Libya",
        code: "LY",
        flag: "https://www.untitledui.com/images/flags/LY.svg",
        phoneCode: "218",
        phoneMask: "+218-21-###-####",
    },
    {
        name: "Liechtenstein",
        code: "LI",
        flag: "https://www.untitledui.com/images/flags/LI.svg",
        phoneCode: "423",
        phoneMask: "+423 (###) ###-####",
    },
    {
        name: "Lithuania",
        code: "LT",
        flag: "https://www.untitledui.com/images/flags/LT.svg",
        phoneCode: "370",
        phoneMask: "+370 (###) ##-###",
    },
    {
        name: "Luxembourg",
        code: "LU",
        flag: "https://www.untitledui.com/images/flags/LU.svg",
        phoneCode: "352",
        phoneMask: "+352 (###) ###-###",
    },
    {
        name: "Madagascar",
        code: "MG",
        flag: "https://www.untitledui.com/images/flags/MG.svg",
        phoneCode: "261",
        phoneMask: "+261-##-##-#####",
    },
    {
        name: "Malawi",
        code: "MW",
        flag: "https://www.untitledui.com/images/flags/MW.svg",
        phoneCode: "265",
        phoneMask: "+265-#-####-####",
    },
    {
        name: "Malaysia",
        code: "MY",
        flag: "https://www.untitledui.com/images/flags/MY.svg",
        phoneCode: "60",
        phoneMask: "+60-#-###-###",
    },
    {
        name: "Maldives",
        code: "MV",
        flag: "https://www.untitledui.com/images/flags/MV.svg",
        phoneCode: "960",
        phoneMask: "+960-###-####",
    },
    {
        name: "Mali",
        code: "ML",
        flag: "https://www.untitledui.com/images/flags/ML.svg",
        phoneCode: "223",
        phoneMask: "+223-##-##-####",
    },
    {
        name: "Malta",
        code: "MT",
        flag: "https://www.untitledui.com/images/flags/MT.svg",
        phoneCode: "356",
        phoneMask: "+356-####-####",
    },
    {
        name: "Marshall Islands",
        code: "MH",
        flag: "https://www.untitledui.com/images/flags/MH.svg",
        phoneCode: "692",
        phoneMask: "+692-###-####",
    },
    {
        name: "Mauritania",
        code: "MR",
        flag: "https://www.untitledui.com/images/flags/MR.svg",
        phoneCode: "222",
        phoneMask: "+222-##-##-####",
    },
    {
        name: "Mauritius",
        code: "MU",
        flag: "https://www.untitledui.com/images/flags/MU.svg",
        phoneCode: "230",
        phoneMask: "+230-###-####",
    },
    {
        name: "Mexico",
        code: "MX",
        flag: "https://www.untitledui.com/images/flags/MX.svg",
        phoneCode: "52",
        phoneMask: "+52-##-##-####",
    },
    {
        name: "Micronesia",
        code: "FM",
        flag: "https://www.untitledui.com/images/flags/FM.svg",
        phoneCode: "691",
        phoneMask: "+691-###-####",
    },
    {
        name: "Moldova",
        code: "MD",
        flag: "https://www.untitledui.com/images/flags/MD.svg",
        phoneCode: "373",
        phoneMask: "+373-####-####",
    },
    {
        name: "Monaco",
        code: "MC",
        flag: "https://www.untitledui.com/images/flags/MC.svg",
        phoneCode: "377",
        phoneMask: "+377-##-###-###",
    },
    {
        name: "Mongolia",
        code: "MN",
        flag: "https://www.untitledui.com/images/flags/MN.svg",
        phoneCode: "976",
        phoneMask: "+976-##-##-####",
    },
    {
        name: "Montenegro",
        code: "ME",
        flag: "https://www.untitledui.com/images/flags/ME.svg",
        phoneCode: "382",
        phoneMask: "+382-##-###-###",
    },
    {
        name: "Morocco",
        code: "MA",
        flag: "https://www.untitledui.com/images/flags/MA.svg",
        phoneCode: "212",
        phoneMask: "+212-##-####-###",
    },
    {
        name: "Mozambique",
        code: "MZ",
        flag: "https://www.untitledui.com/images/flags/MZ.svg",
        phoneCode: "258",
        phoneMask: "+258-##-###-###",
    },
    {
        name: "Myanmar",
        code: "MM",
        flag: "https://www.untitledui.com/images/flags/MM.svg",
        phoneCode: "95",
        phoneMask: "+95-###-###",
    },
    {
        name: "Namibia",
        code: "NA",
        flag: "https://www.untitledui.com/images/flags/NA.svg",
        phoneCode: "264",
        phoneMask: "+264-##-###-####",
    },
    {
        name: "Nauru",
        code: "NR",
        flag: "https://www.untitledui.com/images/flags/NR.svg",
        phoneCode: "674",
        phoneMask: "+674-###-####",
    },
    {
        name: "Nepal",
        code: "NP",
        flag: "https://www.untitledui.com/images/flags/NP.svg",
        phoneCode: "977",
        phoneMask: "+977-##-###-###",
    },
    {
        name: "Netherlands",
        code: "NL",
        flag: "https://www.untitledui.com/images/flags/NL.svg",
        phoneCode: "31",
        phoneMask: "+31-##-###-####",
    },
    {
        name: "New Zealand",
        code: "NZ",
        flag: "https://www.untitledui.com/images/flags/NZ.svg",
        phoneCode: "64",
        phoneMask: "+64 (###) ###-####",
    },
    {
        name: "Nicaragua",
        code: "NI",
        flag: "https://www.untitledui.com/images/flags/NI.svg",
        phoneCode: "505",
        phoneMask: "+505-####-####",
    },
    {
        name: "Niger",
        code: "NE",
        flag: "https://www.untitledui.com/images/flags/NE.svg",
        phoneCode: "227",
        phoneMask: "+227-##-##-####",
    },
    {
        name: "Nigeria",
        code: "NG",
        flag: "https://www.untitledui.com/images/flags/NG.svg",
        phoneCode: "234",
        phoneMask: "+234 (###) ###-####",
    },
    {
        name: "North Korea",
        code: "KP",
        flag: "https://www.untitledui.com/images/flags/KP.svg",
        phoneCode: "850",
        phoneMask: "+850-####-#############",
    },
    {
        name: "North Macedonia",
        code: "MK",
        flag: "https://www.untitledui.com/images/flags/MK.svg",
        phoneCode: "389",
        phoneMask: "+389-##-###-###",
    },
    {
        name: "Norway",
        code: "NO",
        flag: "https://www.untitledui.com/images/flags/NO.svg",
        phoneCode: "47",
        phoneMask: "+47 (###) ##-###",
    },
    {
        name: "Oman",
        code: "OM",
        flag: "https://www.untitledui.com/images/flags/OM.svg",
        phoneCode: "968",
        phoneMask: "+968-##-###-###",
    },
    {
        name: "Pakistan",
        code: "PK",
        flag: "https://www.untitledui.com/images/flags/PK.svg",
        phoneCode: "92",
        phoneMask: "+92 (###) ###-####",
    },
    {
        name: "Palau",
        code: "PW",
        flag: "https://www.untitledui.com/images/flags/PW.svg",
        phoneCode: "680",
        phoneMask: "+680-###-####",
    },
    {
        name: "Panama",
        code: "PA",
        flag: "https://www.untitledui.com/images/flags/PA.svg",
        phoneCode: "507",
        phoneMask: "+507-###-####",
    },
    {
        name: "Papua New Guinea",
        code: "PG",
        flag: "https://www.untitledui.com/images/flags/PG.svg",
        phoneCode: "675",
        phoneMask: "+675 (###) ##-###",
    },
    {
        name: "Paraguay",
        code: "PY",
        flag: "https://www.untitledui.com/images/flags/PY.svg",
        phoneCode: "595",
        phoneMask: "+595 (###) ###-###",
    },
    {
        name: "Peru",
        code: "PE",
        flag: "https://www.untitledui.com/images/flags/PE.svg",
        phoneCode: "51",
        phoneMask: "+51 (###) ###-###",
    },
    {
        name: "Philippines",
        code: "PH",
        flag: "https://www.untitledui.com/images/flags/PH.svg",
        phoneCode: "63",
        phoneMask: "+63 (###) ###-####",
    },
    {
        name: "Poland",
        code: "PL",
        flag: "https://www.untitledui.com/images/flags/PL.svg",
        phoneCode: "48",
        phoneMask: "+48 (###) ###-###",
    },
    {
        name: "Portugal",
        code: "PT",
        flag: "https://www.untitledui.com/images/flags/PT.svg",
        phoneCode: "351",
        phoneMask: "+351-##-###-####",
    },
    {
        name: "Qatar",
        code: "QA",
        flag: "https://www.untitledui.com/images/flags/QA.svg",
        phoneCode: "974",
        phoneMask: "+974-####-####",
    },
    {
        name: "Romania",
        code: "RO",
        flag: "https://www.untitledui.com/images/flags/RO.svg",
        phoneCode: "40",
        phoneMask: "+40-##-###-####",
    },
    {
        name: "Russia",
        code: "RU",
        flag: "https://www.untitledui.com/images/flags/RU.svg",
        phoneCode: "7",
        phoneMask: "+7 (###) ###-##-##",
    },
    {
        name: "Rwanda",
        code: "RW",
        flag: "https://www.untitledui.com/images/flags/RW.svg",
        phoneCode: "250",
        phoneMask: "+250 (###) ###-###",
    },
    {
        name: "Saint Kitts and Nevis",
        code: "KN",
        flag: "https://www.untitledui.com/images/flags/KN.svg",
        phoneCode: "+1-869",
        phoneMask: "+1 (869) ###-####",
    },
    {
        name: "Saint Lucia",
        code: "LC",
        flag: "https://www.untitledui.com/images/flags/LC.svg",
        phoneCode: "+1-758",
        phoneMask: "+1 (758) ###-####",
    },
    {
        name: "Saint Vincent and the Grenadines",
        code: "VC",
        flag: "https://www.untitledui.com/images/flags/VC.svg",
        phoneCode: "+1-784",
        phoneMask: "+1 (784) ###-####",
    },
    {
        name: "Samoa",
        code: "WS",
        flag: "https://www.untitledui.com/images/flags/WS.svg",
        phoneCode: "685",
        phoneMask: "+685-##-####",
    },
    {
        name: "San Marino",
        code: "SM",
        flag: "https://www.untitledui.com/images/flags/SM.svg",
        phoneCode: "378",
        phoneMask: "+378-####-######",
    },
    {
        name: "Sao Tome and Principe",
        code: "ST",
        flag: "https://www.untitledui.com/images/flags/ST.svg",
        phoneCode: "239",
        phoneMask: "+239-##-#####",
    },
    {
        name: "Saudi Arabia",
        code: "SA",
        flag: "https://www.untitledui.com/images/flags/SA.svg",
        phoneCode: "966",
        phoneMask: "+966-#-###-####",
    },
    {
        name: "Senegal",
        code: "SN",
        flag: "https://www.untitledui.com/images/flags/SN.svg",
        phoneCode: "221",
        phoneMask: "+221-##-###-####",
    },
    {
        name: "Serbia",
        code: "RS",
        flag: "https://www.untitledui.com/images/flags/RS.svg",
        phoneCode: "381",
        phoneMask: "+381-##-###-####",
    },
    {
        name: "Seychelles",
        code: "SC",
        flag: "https://www.untitledui.com/images/flags/SC.svg",
        phoneCode: "248",
        phoneMask: "+248-#-###-###",
    },
    {
        name: "Sierra Leone",
        code: "SL",
        flag: "https://www.untitledui.com/images/flags/SL.svg",
        phoneCode: "232",
        phoneMask: "+232-##-######",
    },
    {
        name: "Singapore",
        code: "SG",
        flag: "https://www.untitledui.com/images/flags/SG.svg",
        phoneCode: "65",
        phoneMask: "+65-####-####",
    },
    {
        name: "Slovakia",
        code: "SK",
        flag: "https://www.untitledui.com/images/flags/SK.svg",
        phoneCode: "421",
        phoneMask: "+421 (###) ###-###",
    },
    {
        name: "Slovenia",
        code: "SI",
        flag: "https://www.untitledui.com/images/flags/SI.svg",
        phoneCode: "386",
        phoneMask: "+386-##-###-###",
    },
    {
        name: "Solomon Islands",
        code: "SB",
        flag: "https://www.untitledui.com/images/flags/SB.svg",
        phoneCode: "677",
        phoneMask: "+677-#####",
    },
    {
        name: "Somalia",
        code: "SO",
        flag: "https://www.untitledui.com/images/flags/SO.svg",
        phoneCode: "252",
        phoneMask: "+252-#-###-###",
    },
    {
        name: "South Africa",
        code: "ZA",
        flag: "https://www.untitledui.com/images/flags/ZA.svg",
        phoneCode: "27",
        phoneMask: "+27-##-###-####",
    },
    {
        name: "South Korea",
        code: "KR",
        flag: "https://www.untitledui.com/images/flags/KR.svg",
        phoneCode: "82",
        phoneMask: "+82-##-###-####",
    },
    {
        name: "South Sudan",
        code: "SS",
        flag: "https://www.untitledui.com/images/flags/SS.svg",
        phoneCode: "211",
        phoneMask: "+211-##-###-####",
    },
    {
        name: "Spain",
        code: "ES",
        flag: "https://www.untitledui.com/images/flags/ES.svg",
        phoneCode: "34",
        phoneMask: "+34 (###) ###-###",
    },
    {
        name: "Sri Lanka",
        code: "LK",
        flag: "https://www.untitledui.com/images/flags/LK.svg",
        phoneCode: "94",
        phoneMask: "+94-##-###-####",
    },
    {
        name: "Suriname",
        code: "SR",
        flag: "https://www.untitledui.com/images/flags/SR.svg",
        phoneCode: "597",
        phoneMask: "+597-###-###",
    },
    {
        name: "Sweden",
        code: "SE",
        flag: "https://www.untitledui.com/images/flags/SE.svg",
        phoneCode: "46",
        phoneMask: "+46-##-###-####",
    },
    {
        name: "Switzerland",
        code: "CH",
        flag: "https://www.untitledui.com/images/flags/CH.svg",
        phoneCode: "41",
        phoneMask: "+41-##-###-####",
    },
    {
        name: "Syria",
        code: "SY",
        flag: "https://www.untitledui.com/images/flags/SY.svg",
        phoneCode: "963",
        phoneMask: "+963-##-####-###",
    },
    {
        name: "Tajikistan",
        code: "TJ",
        flag: "https://www.untitledui.com/images/flags/TJ.svg",
        phoneCode: "992",
        phoneMask: "+992-##-###-####",
    },
    {
        name: "Tanzania",
        code: "TZ",
        flag: "https://www.untitledui.com/images/flags/TZ.svg",
        phoneCode: "255",
        phoneMask: "+255-##-###-####",
    },
    {
        name: "Thailand",
        code: "TH",
        flag: "https://www.untitledui.com/images/flags/TH.svg",
        phoneCode: "66",
        phoneMask: "+66-##-###-###",
    },
    {
        name: "Togo",
        code: "TG",
        flag: "https://www.untitledui.com/images/flags/TG.svg",
        phoneCode: "228",
        phoneMask: "+228-##-###-###",
    },
    {
        name: "Tonga",
        code: "TO",
        flag: "https://www.untitledui.com/images/flags/TO.svg",
        phoneCode: "676",
        phoneMask: "+676-#####",
    },
    {
        name: "Trinidad and Tobago",
        code: "TT",
        flag: "https://www.untitledui.com/images/flags/TT.svg",
        phoneCode: "+1-868",
        phoneMask: "+1 (868) ###-####",
    },
    {
        name: "Tunisia",
        code: "TN",
        flag: "https://www.untitledui.com/images/flags/TN.svg",
        phoneCode: "216",
        phoneMask: "+216-##-###-###",
    },
    {
        name: "Turkey",
        code: "TR",
        flag: "https://www.untitledui.com/images/flags/TR.svg",
        phoneCode: "90",
        phoneMask: "+90 (###) ###-####",
    },
    {
        name: "Turkmenistan",
        code: "TM",
        flag: "https://www.untitledui.com/images/flags/TM.svg",
        phoneCode: "993",
        phoneMask: "+993-#-###-####",
    },
    {
        name: "Tuvalu",
        code: "TV",
        flag: "https://www.untitledui.com/images/flags/TV.svg",
        phoneCode: "688",
        phoneMask: "+688-2####",
    },
    {
        name: "Uganda",
        code: "UG",
        flag: "https://www.untitledui.com/images/flags/UG.svg",
        phoneCode: "256",
        phoneMask: "+256 (###) ###-###",
    },
    {
        name: "Ukraine",
        code: "UA",
        flag: "https://www.untitledui.com/images/flags/UA.svg",
        phoneCode: "380",
        phoneMask: "+380 (##) ###-##-##",
    },
    {
        name: "United Arab Emirates",
        code: "AE",
        flag: "https://www.untitledui.com/images/flags/AE.svg",
        phoneCode: "971",
        phoneMask: "+971-#-###-####",
    },
    {
        name: "United Kingdom",
        code: "GB",
        flag: "https://www.untitledui.com/images/flags/GB.svg",
        phoneCode: "44",
    },
    {
        name: "United States",
        code: "US",
        flag: "https://www.untitledui.com/images/flags/US.svg",
        phoneCode: "1",
        phoneMask: "+1 (###) ###-####",
    },
    {
        name: "Uruguay",
        code: "UY",
        flag: "https://www.untitledui.com/images/flags/UY.svg",
        phoneCode: "598",
        phoneMask: "+598-#-###-##-##",
    },
    {
        name: "Uzbekistan",
        code: "UZ",
        flag: "https://www.untitledui.com/images/flags/UZ.svg",
        phoneCode: "998",
        phoneMask: "+998-##-###-####",
    },
    {
        name: "Vanuatu",
        code: "VU",
        flag: "https://www.untitledui.com/images/flags/VU.svg",
        phoneCode: "678",
        phoneMask: "+678-#####",
    },
    {
        name: "Venezuela",
        code: "VE",
        flag: "https://www.untitledui.com/images/flags/VE.svg",
        phoneCode: "58",
        phoneMask: "+58 (###) ###-####",
    },
    {
        name: "Vietnam",
        code: "VN",
        flag: "https://www.untitledui.com/images/flags/VN.svg",
        phoneCode: "84",
        phoneMask: "+84 (###) ####-###",
    },
    {
        name: "Yemen",
        code: "YE",
        flag: "https://www.untitledui.com/images/flags/YE.svg",
        phoneCode: "967",
        phoneMask: "+967-##-###-###",
    },
    {
        name: "Zambia",
        code: "ZM",
        flag: "https://www.untitledui.com/images/flags/ZM.svg",
        phoneCode: "260",
        phoneMask: "+260-##-###-####",
    },
    {
        name: "Zimbabwe",
        code: "ZW",
        flag: "https://www.untitledui.com/images/flags/ZW.svg",
        phoneCode: "263",
        phoneMask: "+263-#-######",
    },
];

/**
 * Phone code options for the select component.
 */
export const phoneCodeOptions: SelectItemType[] = countries.map((country) => ({
    id: country.code,
    label: country.code,
}));

/**
 * Country options for the select component.
 */
export const countriesOptions: SelectItemType[] = countries.map((country) => ({
    id: country.code,
    label: country.name,
    icon: (props: HTMLAttributes<HTMLImageElement>) => <img {...props} src={country.flag} alt={`${country.name} flag`} />,
}));

export default countries;
