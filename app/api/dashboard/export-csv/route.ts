import { NextResponse } from "next/server";
import ExcelJS from "exceljs";

export async function GET() {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Affiliate Data");

  // Header
  sheet.columns = [
    { header: "Campaign", key: "campaign", width: 25 },
    { header: "Affiliate Name", key: "name", width: 25 },
    { header: "Email", key: "email", width: 30 },
    { header: "Revenue ($)", key: "revenue", width: 15 },
    { header: "Commission ($)", key: "commission", width: 18 },
    { header: "Status", key: "status", width: 15 },
  ];

  // Style header (WARNA)
  sheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF2563EB" }, // biru
    };
    cell.alignment = { vertical: "middle", horizontal: "center" };
  });

  // contoh data
  sheet.addRow({
    campaign: "Website Services",
    name: "John Doe",
    email: "john@gmail.com",
    revenue: 500,
    commission: 100,
    status: "Approved",
  });

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="affiliate-template.xlsx"',
    },
  });
}
