import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { STATUS_STYLES } from "./StatusVisual";
import type { DisplayStatus } from "@/lib/estudios/utils";

const ITEMS: { status: DisplayStatus; key: string }[] = [
  { status: "aprobada", key: "estudios.legend.aprobada" },
  { status: "disponible", key: "estudios.legend.disponible" },
  { status: "bloqueada", key: "estudios.legend.bloqueada" },
  { status: "final-pendiente", key: "estudios.legend.final" },
];

export function Legend() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      {ITEMS.map(({ status, key }) => {
        const style = STATUS_STYLES[status];
        const Icon = style.icon;
        return (
          <div key={status} className="flex items-center gap-1.5 text-xs text-muted">
            <Icon className={`h-3.5 w-3.5 ${style.text}`} />
            {t(key)}
          </div>
        );
      })}
    </div>
  );
}
