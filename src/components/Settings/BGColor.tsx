import { settings } from "@utils/settingsStorage";
import styles from "./index.module.css";
import * as ls from "@utils/localStorage";

export const BGColor = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    ls.set("background", event.target.value);
  };

  return (
    <input
      type="color"
      defaultValue={settings.getCache("background")}
      onChange={handleChange}
      className={styles.settingValue}
    />
  );
};
