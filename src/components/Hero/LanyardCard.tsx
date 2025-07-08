import { Card, Lanyard } from "react-lanyard";

export function LanyardCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>
      <Lanyard
        userId="1093663240627019786" // Ganti dengan Discord user ID kamu jika ingin
        presence={true}
        style={{ marginBottom: 16 }}
      />
      <Card
        userId="1093663240627019786" // Ganti dengan Discord user ID kamu jika ingin
        style={{ minWidth: 260, minHeight: 120 }}
      />
    </div>
  );
}
