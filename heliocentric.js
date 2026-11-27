/**
 * Heliocentric Calendar Engine (v1.0.0)
 * 365-day symmetrical calendar | 3 + 1/2 + 3 + 3 work rhythm | 62 / 4340 / 125860 cosmic leap rules
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.Heliocentric = factory();
}(typeof self !== "undefined" ? self : this, function () {
  const EPOCH = Date.UTC(1793, 10, 17);
  const LUNAR_REF = Date.UTC(2000, 0, 6, 18, 14, 0);
  const SYNODIC = 29.53058867;
  const MONTHS = "I·Unario,II·Binario,III·Ternario,IV·Cuaternario,V·Quinario,VI·Senario,VII·Septenario,VIII·Octonario,IX·Nonario,X·Decenario,XI·Undecenario,XII·Duodenario,XIII·Péntada".split(",");
  const DAYS = "Primidi,Duodi,Tridi,Quartidi,Quintidi,Sextidi,Septidi,Octidi,Nonidi,Décadi".split(",");

  function fromDate(date = new Date()) {
    const dt = date instanceof Date ? date : new Date(date);
    const utcMidnight = Date.UTC(dt.getUTCFullYear(), dt.getUTCMonth(), dt.getUTCDate());
    const totalDays = Math.floor((utcMidnight - EPOCH) / 86400000);
    const year = Math.floor(totalDays / 365) + 1;
    const rem = ((totalDays % 365) + 365) % 365;
    const dayOfYear = rem + 1;
    const monthIndex = Math.floor(rem / 30);
    const dayOfMonth = (rem % 30) + 1;
    const decade = Math.floor((dayOfMonth - 1) / 10) + 1;
    const mod = (dayOfMonth - 1) % 10;

    let dailyAdjSec = 57.329315 + 87.670685 * Math.cos(2 * Math.PI * (dayOfYear - 105) / 365);
    const isCosmicLeap = ((year % 62 === 0 && year % 4340 !== 0) || year % 125860 === 0);
    if (isCosmicLeap && monthIndex === 12 && dayOfMonth === 5) dailyAdjSec += 1;

    const workStatus = (monthIndex === 12 || mod >= 7) ? "REST" : (mod === 3 ? "HALF_REST" : "WORK");
    const utcSec = dt.getUTCHours() * 3600 + dt.getUTCMinutes() * 60 + dt.getUTCSeconds() + dt.getUTCMilliseconds() / 1000;
    const secondDuration = (86400 + dailyAdjSec) / 86400;
    const hutSec = utcSec / secondDuration;
    const pad = n => String(Math.floor(n)).padStart(2, "0");
    const hutTime = `${pad(hutSec / 3600)}:${pad((hutSec % 3600) / 60)}:${pad(hutSec % 60)}`;

    const ld = (dt.getTime() - LUNAR_REF) / 86400000;
    const anom = 2 * Math.PI * ((ld / 27.554551) % 1);
    const corr = (0.41 * Math.sin(anom) - 0.17 * Math.sin(2 * anom)) / SYNODIC;
    const phase = ((((ld / SYNODIC) % 1) + 1) % 1 + corr + 1) % 1;
    const moonIllumination = Math.round(50 * (1 - Math.cos(2 * Math.PI * phase)));

    return {
      year, dayOfYear, monthIndex: monthIndex + 1, monthName: MONTHS[monthIndex],
      dayOfMonth, decade, dayName: DAYS[mod], workStatus, isCosmicLeap,
      dailyAdjSec: +dailyAdjSec.toFixed(4), secondDuration: +secondDuration.toFixed(6),
      hutTime, moonPhase: +phase.toFixed(4), moonIllumination,
      formatted: `${DAYS[mod]}, Día ${dayOfMonth} de ${MONTHS[monthIndex]} • Año ${year} (${hutTime} TUH)`
    };
  }

  return { version: "1.0.0", now: () => fromDate(new Date()), fromDate };
}));
