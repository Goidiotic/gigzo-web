export default function formatBankName(bankName) {
    let bankNameFormatted = bankName;
    const bankList = [
        'HDFC Bank',
        'YES BANK',
        'IDFC FIRST BANK',
        'INDUSIND BANK',
        'KARNATAKA BANK',
        'UJJIVAN SMALL FINANCE BANK'
    ];
    const isExist = bankList.includes(bankName);
    if (isExist) {
        bankNameFormatted = bankName + " Ltd";
    }
    return bankNameFormatted;
}
