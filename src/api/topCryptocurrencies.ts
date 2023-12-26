import axios from "axios";

export async function topCryptocurrencies() {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd?limit=2"
    );
    return data;
  } catch (error) {
    console.log("Etwas ist schief gelaufen.", error);
  }
}
