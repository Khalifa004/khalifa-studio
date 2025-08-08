// CalWidget.tsx or CalWidget.jsx
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalWidget() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "khalifa.s/30min",
        config: { layout: "month_view" },
        buttonPosition: "bottom-left"
      });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return null; // No visible component needed; button will float
}
