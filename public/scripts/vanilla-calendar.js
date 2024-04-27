/*! name: vanilla-calendar-pro | url: https://github.com/uvarov-frontend/vanilla-calendar-pro */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).VanillaCalendar = t());
})(this, function () {
  "use strict";
  var e = Object.defineProperty,
    t = Object.getOwnPropertySymbols,
    a = Object.prototype.hasOwnProperty,
    n = Object.prototype.propertyIsEnumerable,
    s = (t, a, n) =>
      a in t
        ? e(t, a, { enumerable: !0, configurable: !0, writable: !0, value: n })
        : (t[a] = n),
    l = (e, l) => {
      for (var r in l || (l = {})) a.call(l, r) && s(e, r, l[r]);
      if (t) for (var r of t(l)) n.call(l, r) && s(e, r, l[r]);
      return e;
    },
    r = (e, t, a) => (s(e, "symbol" != typeof t ? t + "" : t, a), a);
  const i = {
      calendar: "vanilla-calendar",
      calendarDefault: "vanilla-calendar_default",
      calendarMultiple: "vanilla-calendar_multiple",
      calendarMonth: "vanilla-calendar_month",
      calendarYear: "vanilla-calendar_year",
      calendarHidden: "vanilla-calendar_hidden",
      calendarToInput: "vanilla-calendar_to-input",
      calendarToInputTop: "vanilla-calendar_to-input_top",
      calendarToInputBottom: "vanilla-calendar_to-input_bottom",
      controls: "vanilla-calendar-controls",
      grid: "vanilla-calendar-grid",
      gridDisabled: "vanilla-calendar-grid_disabled",
      column: "vanilla-calendar-column",
      columnMonth: "vanilla-calendar-column_month",
      columnYear: "vanilla-calendar-column_year",
      header: "vanilla-calendar-header",
      headerContent: "vanilla-calendar-header__content",
      month: "vanilla-calendar-month",
      monthDisabled: "vanilla-calendar-month_disabled",
      year: "vanilla-calendar-year",
      yearDisabled: "vanilla-calendar-year_disabled",
      arrow: "vanilla-calendar-arrow",
      arrowPrev: "vanilla-calendar-arrow_prev",
      arrowNext: "vanilla-calendar-arrow_next",
      wrapper: "vanilla-calendar-wrapper",
      content: "vanilla-calendar-content",
      week: "vanilla-calendar-week",
      weekDay: "vanilla-calendar-week__day",
      weekDayWeekend: "vanilla-calendar-week__day_weekend",
      days: "vanilla-calendar-days",
      daysSelecting: "vanilla-calendar-days_selecting",
      months: "vanilla-calendar-months",
      monthsSelecting: "vanilla-calendar-months_selecting",
      monthsMonth: "vanilla-calendar-months__month",
      monthsMonthSelected: "vanilla-calendar-months__month_selected",
      monthsMonthDisabled: "vanilla-calendar-months__month_disabled",
      years: "vanilla-calendar-years",
      yearsSelecting: "vanilla-calendar-years_selecting",
      yearsYear: "vanilla-calendar-years__year",
      yearsYearSelected: "vanilla-calendar-years__year_selected",
      yearsYearDisabled: "vanilla-calendar-years__year_disabled",
      time: "vanilla-calendar-time",
      timeContent: "vanilla-calendar-time__content",
      timeHours: "vanilla-calendar-time__hours",
      timeMinutes: "vanilla-calendar-time__minutes",
      timeKeeping: "vanilla-calendar-time__keeping",
      timeRanges: "vanilla-calendar-time__ranges",
      timeRange: "vanilla-calendar-time__range",
      day: "vanilla-calendar-day",
      dayHoverFirst: "vanilla-calendar-day_hover-first",
      dayHoverLast: "vanilla-calendar-day_hover-last",
      dayHoverIntermediate: "vanilla-calendar-day_hover-intermediate",
      daySelectedFirst: "vanilla-calendar-day_selected-first",
      daySelectedLast: "vanilla-calendar-day_selected-last",
      daySelectedIntermediate: "vanilla-calendar-day_selected-intermediate",
      dayPopup: "vanilla-calendar-day__popup",
      dayBtn: "vanilla-calendar-day__btn",
      dayBtnPrev: "vanilla-calendar-day__btn_prev",
      dayBtnNext: "vanilla-calendar-day__btn_next",
      dayBtnToday: "vanilla-calendar-day__btn_today",
      dayBtnSelected: "vanilla-calendar-day__btn_selected",
      dayBtnHover: "vanilla-calendar-day__btn_hover",
      dayBtnDisabled: "vanilla-calendar-day__btn_disabled",
      dayBtnWeekend: "vanilla-calendar-day__btn_weekend",
      dayBtnHoliday: "vanilla-calendar-day__btn_holiday",
      weekNumbers: "vanilla-calendar-week-numbers",
      weekNumbersTitle: "vanilla-calendar-week-numbers__title",
      weekNumbersContent: "vanilla-calendar-week-numbers__content",
      weekNumber: "vanilla-calendar-week-number",
      isFocus: "vanilla-calendar-is-focus",
    },
    d = (e) =>
      `<div class="${e.controls}"><#ArrowPrev /><#ArrowNext /></div><div class="${e.grid}"><#Multiple><div class="${e.column}"><div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div></div><#/Multiple></div><#ControlTime />`,
    o = (e) =>
      `<div class="${e.header}"><div class="${e.headerContent}"><#Month /><#Year /></div></div><div class="${e.wrapper}"><div class="${e.content}"><#Months /></div></div>`,
    c = (e) =>
      `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><div class="${e.content}"><#Years /></div></div>`;
  class u {
    constructor() {
      var e;
      r(this, "isInit", !1),
        r(this, "input", !1),
        r(this, "type", "default"),
        r(this, "months", 2),
        r(this, "jumpMonths", 1),
        r(this, "date", {
          min: "1970-01-01",
          max: "2470-12-31",
          today: new Date(),
        }),
        r(this, "settings", {
          lang: "en",
          iso8601: !0,
          range: {
            min: this.date.min,
            max: this.date.max,
            disablePast: !1,
            disableGaps: !1,
            disableAllDays: !1,
            disableWeekday: void 0,
            disabled: void 0,
            enabled: void 0,
          },
          selection: {
            day: "single",
            month: !0,
            year: !0,
            time: !1,
            controlTime: "all",
            stepHours: 1,
            stepMinutes: 1,
            cancelableDay: !0,
          },
          selected: {
            dates: void 0,
            month: void 0,
            year: void 0,
            holidays: void 0,
            time: void 0,
          },
          visibility: {
            theme: "system",
            themeDetect: "html[data-theme]",
            monthShort: !0,
            weekNumbers: !1,
            weekend: !0,
            today: !0,
            disabled: !1,
            daysOutside: !0,
            positionToInput: "left",
          },
        }),
        r(this, "locale", { months: [], weekday: [] }),
        r(this, "actions", {
          clickDay: null,
          clickWeekNumber: null,
          clickMonth: null,
          clickYear: null,
          clickArrow: null,
          changeTime: null,
          changeToInput: null,
          getDays: null,
          getMonths: null,
          getYears: null,
          initCalendar: null,
          updateCalendar: null,
          destroyCalendar: null,
          showCalendar: null,
          hideCalendar: null,
        }),
        r(this, "popups", {}),
        r(this, "CSSClasses", l({}, i)),
        r(this, "DOMTemplates", {
          default:
            ((e = this.CSSClasses),
            `<div class="${e.header}"><#ArrowPrev /><div class="${e.headerContent}"><#Month /><#Year /></div><#ArrowNext /></div><div class="${e.wrapper}"><#WeekNumbers /><div class="${e.content}"><#Week /><#Days /></div></div><#ControlTime />`),
          multiple: d(this.CSSClasses),
          month: o(this.CSSClasses),
          year: c(this.CSSClasses),
        }),
        r(this, "HTMLElement"),
        r(this, "HTMLOriginalElement"),
        r(this, "HTMLInputElement"),
        r(this, "rangeMin"),
        r(this, "rangeMax"),
        r(this, "rangeDisabled"),
        r(this, "rangeEnabled"),
        r(this, "selectedDates"),
        r(this, "selectedHolidays"),
        r(this, "selectedMonth"),
        r(this, "selectedYear"),
        r(this, "selectedHours"),
        r(this, "selectedMinutes"),
        r(this, "selectedKeeping"),
        r(this, "selectedTime"),
        r(this, "currentType"),
        r(this, "correctMonths"),
        r(this, "viewYear"),
        r(this, "dateMin"),
        r(this, "dateMax");
    }
  }
  const m = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(
        e.getDate()
      ).padStart(2, "0")}`,
    g = (e) => new Date(`${e}T00:00:00`),
    h = (e) =>
      e.reduce(
        (e, t) => (
          t.match(/^(\d{4}-\d{2}-\d{2})$/g)
            ? e.push(t)
            : t.replace(
                /(\d{4}-\d{2}-\d{2}).*?(\d{4}-\d{2}-\d{2})/g,
                (t, a, n) => {
                  const s = g(a),
                    l = g(n),
                    r = new Date(s.getTime());
                  for (; r <= l; r.setDate(r.getDate() + 1)) e.push(m(r));
                  return t;
                }
              ),
          e
        ),
        []
      ),
    y = (e) =>
      e
        ? {
            0: "12",
            13: "01",
            14: "02",
            15: "03",
            16: "04",
            17: "05",
            18: "06",
            19: "07",
            20: "08",
            21: "09",
            22: "10",
            23: "11",
          }[Number(e)] || String(e)
        : "",
    v = (e) =>
      `${e} is not found, check the first argument passed to new VanillaCalendar.`,
    M =
      'The calendar has not been initialized, please initialize it using the "init()" method first.',
    S =
      'You specified "define" for "settings.lang" but did not provide the required values for "locale.weekday" or "locale.months".',
    p = 'Incorrect name of theme in "settings.visibility.theme".',
    C = "The value of the time property can be: false, true, 12 or 24.",
    b = (e) => {
      (e.currentType = e.type),
        ((e) => {
          const t =
              void 0 !== e.settings.selected.month &&
              Number(e.settings.selected.month) >= 0 &&
              Number(e.settings.selected.month) < 12,
            a =
              void 0 !== e.settings.selected.year &&
              Number(e.settings.selected.year) >= 0 &&
              Number(e.settings.selected.year) <= 9999;
          (e.selectedMonth = t
            ? Number(e.settings.selected.month)
            : e.date.today.getMonth()),
            (e.selectedYear = a
              ? Number(e.settings.selected.year)
              : e.date.today.getFullYear()),
            (e.viewYear = e.selectedYear);
        })(e),
        ((e) => {
          var t, a, n;
          (e.settings.range.min =
            g(e.date.min) >= g(e.settings.range.min)
              ? e.date.min
              : e.settings.range.min),
            (e.settings.range.max =
              g(e.date.max) <= g(e.settings.range.max)
                ? e.date.max
                : e.settings.range.max);
          const s =
            e.settings.range.disablePast &&
            !e.settings.range.disableAllDays &&
            g(e.settings.range.min) < e.date.today;
          (e.rangeMin =
            s || e.settings.range.disableAllDays
              ? m(e.date.today)
              : e.settings.range.min),
            (e.rangeMax = e.settings.range.disableAllDays
              ? m(e.date.today)
              : e.settings.range.max),
            (e.rangeDisabled =
              e.settings.range.disabled && !e.settings.range.disableAllDays
                ? h(e.settings.range.disabled)
                : e.settings.range.disableAllDays
                ? [e.rangeMin]
                : []),
            e.rangeDisabled.length > 1 &&
              e.rangeDisabled.sort((e, t) => +new Date(e) - +new Date(t)),
            (e.rangeEnabled = e.settings.range.enabled
              ? h(e.settings.range.enabled)
              : []),
            (null == (t = e.rangeEnabled) ? void 0 : t[0]) &&
              (null == (a = e.rangeDisabled) ? void 0 : a[0]) &&
              (e.rangeDisabled = e.rangeDisabled.filter(
                (t) => !e.rangeEnabled.includes(t)
              )),
            e.rangeEnabled.length > 1 &&
              e.rangeEnabled.sort((e, t) => +new Date(e) - +new Date(t)),
            (null == (n = e.rangeEnabled) ? void 0 : n[0]) &&
              e.settings.range.disableAllDays &&
              ((e.rangeMin = e.rangeEnabled[0]),
              (e.rangeMax = e.rangeEnabled[e.rangeEnabled.length - 1]));
        })(e),
        ((e) => {
          var t, a;
          (e.selectedDates = (
            null == (t = e.settings.selected.dates) ? void 0 : t[0]
          )
            ? h(e.settings.selected.dates)
            : []),
            (e.selectedHolidays = (
              null == (a = e.settings.selected.holidays) ? void 0 : a[0]
            )
              ? h(e.settings.selected.holidays)
              : []);
        })(e),
        ((e) => {
          (e.dateMin = e.settings.visibility.disabled
            ? g(e.date.min)
            : g(e.rangeMin)),
            (e.dateMax = e.settings.visibility.disabled
              ? g(e.date.max)
              : g(e.rangeMax));
        })(e),
        ((e) => {
          const t =
            !0 === e.settings.selection.time ||
            12 === e.settings.selection.time;
          if (t || 24 === e.settings.selection.time) {
            let a = !1;
            if ("string" == typeof e.settings.selected.time) {
              const n = t
                ? /^([0-9]|0[1-9]|1[0-2]):([0-5][0-9])|(AM|PM)/g
                : /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])/g;
              e.settings.selected.time.replace(
                n,
                (n, s, l, r) => (
                  s &&
                    l &&
                    ((a = !0), (e.selectedHours = s), (e.selectedMinutes = l)),
                  r && t
                    ? (e.selectedKeeping = r)
                    : t && (e.selectedKeeping = "AM"),
                  ""
                )
              );
            }
            !a && t
              ? ((e.selectedHours = y(String(e.date.today.getHours()))),
                (e.selectedMinutes = String(e.date.today.getMinutes())),
                (e.selectedKeeping =
                  Number(e.date.today.getHours()) >= 12 ? "PM" : "AM"))
              : a ||
                ((e.selectedHours = String(e.date.today.getHours())),
                (e.selectedMinutes = String(e.date.today.getMinutes()))),
              (e.selectedHours =
                Number(e.selectedHours) < 10
                  ? `0${Number(e.selectedHours)}`
                  : `${e.selectedHours}`),
              (e.selectedMinutes =
                Number(e.selectedMinutes) < 10
                  ? `0${Number(e.selectedMinutes)}`
                  : `${e.selectedMinutes}`),
              (e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${
                e.selectedKeeping ? ` ${e.selectedKeeping}` : ""
              }`);
          } else if (e.settings.selection.time) throw new Error(C);
        })(e),
        ((e) => {
          e.correctMonths =
            "multiple" === e.type
              ? 1 === e.months
                ? 2
                : e.months > 12
                ? 12
                : e.months
              : 1;
        })(e);
    },
    f = ({ arrowPrev: e, arrowNext: t, isPrevHidden: a, isNextHidden: n }) => {
      (e.style.visibility = a ? "hidden" : ""),
        (t.style.visibility = n ? "hidden" : "");
    },
    w = (e) => {
      var t, a;
      if ("month" === e.currentType) return;
      const n =
          null == (t = e.HTMLElement)
            ? void 0
            : t.querySelector(`.${e.CSSClasses.arrowPrev}`),
        s =
          null == (a = e.HTMLElement)
            ? void 0
            : a.querySelector(`.${e.CSSClasses.arrowNext}`);
      if (!n || !s) return;
      ({
        default: () => {
          const t = g(m(new Date(e.selectedYear, e.selectedMonth, 1))),
            a = new Date(t.getTime()),
            l = new Date(t.getTime());
          a.setMonth(a.getMonth() - e.jumpMonths),
            l.setMonth(l.getMonth() + e.jumpMonths),
            e.settings.selection.year ||
              (e.dateMin.setFullYear(t.getFullYear()),
              e.dateMax.setFullYear(t.getFullYear()));
          const r =
              !e.settings.selection.month ||
              a.getFullYear() < e.dateMin.getFullYear() ||
              (a.getFullYear() === e.dateMin.getFullYear() &&
                a.getMonth() < e.dateMin.getMonth()),
            i =
              !e.settings.selection.month ||
              l.getFullYear() > e.dateMax.getFullYear() ||
              (l.getFullYear() === e.dateMax.getFullYear() &&
                l.getMonth() > e.dateMax.getMonth());
          f({ arrowPrev: n, arrowNext: s, isPrevHidden: r, isNextHidden: i });
        },
        year: () => {
          f({
            arrowPrev: n,
            arrowNext: s,
            isPrevHidden:
              e.dateMin.getFullYear() &&
              e.viewYear - 7 <= e.dateMin.getFullYear(),
            isNextHidden:
              e.dateMax.getFullYear() &&
              e.viewYear + 7 >= e.dateMax.getFullYear(),
          });
        },
      })["multiple" === e.currentType ? "default" : e.currentType]();
    },
    D = (e, t) => {
      if (!e) return null;
      const a = g(e),
        n = t ? a.getDay() || 7 : a.getDay();
      a.setDate(a.getDate() + 4 - n);
      const s = new Date(a.getFullYear(), 0, 1),
        l = Math.ceil(((+a - +s) / 864e5 + 1) / 7);
      return { year: a.getFullYear(), week: l };
    },
    T = (e, t, a, n, s) => {
      const l = t[a].querySelector(`.${e.CSSClasses.dayBtn}`),
        r = D(null == l ? void 0 : l.dataset.calendarDay, e.settings.iso8601);
      if (!r) return;
      const i = n.cloneNode(!0);
      (i.innerText = String(r.week)),
        (i.dataset.calendarYearWeek = String(r.year)),
        s.append(i);
    },
    $ = (e, t, a, n, s, l, r, i) => {
      const d = document.createElement("div");
      d.className = e.CSSClasses.day;
      const o = document.createElement("button");
      (o.className = `${e.CSSClasses.dayBtn}${i ? ` ${i}` : ""}`),
        (o.type = "button"),
        (o.innerText = String(n)),
        (o.dataset.calendarDay = l);
      e.settings.visibility.weekNumbers &&
        (() => {
          const t = D(l, e.settings.iso8601);
          t && (o.dataset.calendarWeekNumber = String(t.week));
        })(),
        r ? e.settings.visibility.daysOutside && d.append(o) : d.append(o),
        ((e, t, a) => {
          var n, s, l, r, i;
          const d =
              null == (n = e.settings.range.disableWeekday)
                ? void 0
                : n.includes(a),
            o =
              e.settings.range.disableAllDays &&
              !!(null == (s = e.rangeEnabled) ? void 0 : s[0]);
          (!d && !o) ||
            (null == (l = e.rangeEnabled) ? void 0 : l.includes(t)) ||
            (null == (r = e.rangeDisabled) ? void 0 : r.includes(t)) ||
            (e.rangeDisabled.push(t),
            null == (i = e.rangeDisabled) ||
              i.sort((e, t) => +new Date(e) - +new Date(t)));
        })(e, l, s),
        ((e, t, a, n, s, l, r) => {
          var i, d, o;
          (g(e.rangeMin) > g(l) ||
            g(e.rangeMax) < g(l) ||
            (null == (i = e.rangeDisabled) ? void 0 : i.includes(l)) ||
            (!e.settings.selection.month && r) ||
            (!e.settings.selection.year && g(l).getFullYear() !== t)) &&
            (n.classList.add(e.CSSClasses.dayBtnDisabled), (n.tabIndex = -1)),
            e.settings.visibility.today &&
              m(e.date.today) === l &&
              n.classList.add(e.CSSClasses.dayBtnToday),
            !e.settings.visibility.weekend ||
              (0 !== s && 6 !== s) ||
              n.classList.add(e.CSSClasses.dayBtnWeekend),
            (null == (d = e.selectedHolidays) ? void 0 : d.includes(l)) &&
              n.classList.add(e.CSSClasses.dayBtnHoliday),
            (null == (o = e.selectedDates) ? void 0 : o.includes(l)) &&
              (n.classList.add(e.CSSClasses.dayBtnSelected),
              e.selectedDates.length > 1 &&
                "multiple-ranged" === e.settings.selection.day &&
                (e.selectedDates[0] === l &&
                  a.classList.add(e.CSSClasses.daySelectedFirst),
                e.selectedDates[e.selectedDates.length - 1] === l &&
                  a.classList.add(e.CSSClasses.daySelectedLast),
                e.selectedDates[0] !== l &&
                  e.selectedDates[e.selectedDates.length - 1] !== l &&
                  a.classList.add(e.CSSClasses.daySelectedIntermediate)));
        })(e, t, d, o, s, l, r),
        a.append(d),
        e.actions.getDays && e.actions.getDays(n, l, d, o, e);
    },
    L = (e) => {
      const t = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.days}`),
        a = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.weekNumbers}`),
        n = new Date(e.selectedYear, e.selectedMonth, 1);
      t.forEach((t, s) => {
        const l = new Date(n);
        l.setMonth(l.getMonth() + s);
        const r = l.getMonth(),
          i = l.getFullYear(),
          d = new Date(i, r, 1),
          o = new Date(i, r + 1, 0).getDate(),
          c = e.settings.iso8601
            ? (0 !== d.getDay() ? d.getDay() : 7) - 1
            : d.getDay();
        e.settings.selection.day && t.classList.add(e.CSSClasses.daysSelecting),
          (t.innerHTML = ""),
          ((e, t, a, n, s) => {
            let l = new Date(a, n, 0).getDate() - (s - 1);
            const r = 0 === n ? a - 1 : a,
              i = 0 === n ? 12 : n < 10 ? `0${n}` : n;
            for (let n = s; n > 0; n--, l++) {
              const n = `${r}-${i}-${l}`,
                s = g(n).getDay();
              $(e, a, t, l, s, n, !0, e.CSSClasses.dayBtnPrev);
            }
          })(e, t, i, r, c),
          ((e, t, a, n, s) => {
            for (let l = 1; l <= a; l++) {
              const a = new Date(n, s, l),
                r = m(a),
                i = a.getDay();
              $(e, n, t, l, i, r, !1, null);
            }
          })(e, t, o, i, r),
          ((e, t, a, n, s, l) => {
            const r = l + a,
              i = 7 * Math.ceil(r / 7) - r,
              d = s + 1 === 12 ? n + 1 : n,
              o = s + 1 === 12 ? "01" : s + 2 < 10 ? `0${s + 2}` : s + 2;
            for (let a = 1; a <= i; a++) {
              const s = `${d}-${o}-${a < 10 ? `0${a}` : String(a)}`,
                l = g(s).getDay();
              $(e, n, t, a, l, s, !0, e.CSSClasses.dayBtnNext);
            }
          })(e, t, o, i, r, c),
          ((e, t, a, n, s) => {
            if (!e.settings.visibility.weekNumbers) return;
            n.innerHTML = "";
            const l = document.createElement("b");
            (l.className = e.CSSClasses.weekNumbersTitle),
              (l.innerText = "#"),
              n.append(l);
            const r = document.createElement("div");
            (r.className = e.CSSClasses.weekNumbersContent), n.append(r);
            const i = document.createElement("button");
            (i.type = "button"), (i.className = e.CSSClasses.weekNumber);
            const d = s.querySelectorAll(`.${e.CSSClasses.day}`),
              o = Math.ceil((t + a) / 7);
            for (let t = 0; t < o; t++) T(e, d, 0 === t ? 6 : 7 * t, i, r);
          })(e, c, o, a[s], t),
          ((e, t) => {
            var a;
            e.popups &&
              (null == (a = Object.entries(e.popups)) ||
                a.forEach(([a, n]) =>
                  ((e, t, a, n) => {
                    const s = a.querySelector(`[data-calendar-day="${e}"]`);
                    s &&
                      ((null == t ? void 0 : t.modifier) &&
                        s.classList.add(...t.modifier.trim().split(" ")),
                      (null == t ? void 0 : t.html) &&
                        (s.parentElement.innerHTML += `<div class="${n}">${t.html}</div>`));
                  })(a, n, t, e.CSSClasses.dayPopup)
                ));
          })(e, t);
      });
    },
    E = (e) => {
      var t, a;
      const n =
          null == (t = e.HTMLElement)
            ? void 0
            : t.querySelectorAll("[data-calendar-selected-month]"),
        s =
          null == (a = e.HTMLElement)
            ? void 0
            : a.querySelectorAll("[data-calendar-selected-year]");
      if (!(null == n ? void 0 : n[0]) && (null == s ? void 0 : s[0])) return;
      const l = new Date(e.selectedYear, e.selectedMonth, 1);
      null == n ||
        n.forEach((t, a) =>
          ((e, t, a, n) => {
            const s = new Date(n.setMonth(e.selectedMonth + a)).getMonth(),
              l =
                !1 === e.settings.selection.month ||
                "only-arrows" === e.settings.selection.month;
            (t.tabIndex = l ? -1 : 0),
              t.classList.toggle(e.CSSClasses.monthDisabled, l),
              t.setAttribute("data-calendar-selected-month", String(s)),
              (t.innerText = e.locale.months[s]);
          })(e, t, a, l)
        ),
        null == s ||
          s.forEach((t, a) =>
            ((e, t, a, n) => {
              const s = new Date(
                  n.setFullYear(e.selectedYear, e.selectedMonth + a)
                ).getFullYear(),
                l =
                  !1 === e.settings.selection.year ||
                  "only-arrows" === e.settings.selection.year;
              (t.tabIndex = l ? -1 : 0),
                t.classList.toggle(e.CSSClasses.yearDisabled, l),
                t.setAttribute("data-calendar-selected-year", String(s)),
                (t.innerText = String(s));
            })(e, t, a, l)
          );
    },
    H = (e, t) => {
      const a = g(m(new Date(e.selectedYear, e.selectedMonth, 1)));
      ({
        prev: () => a.setMonth(a.getMonth() - e.jumpMonths),
        next: () => a.setMonth(a.getMonth() + e.jumpMonths),
      })[t](),
        ([e.selectedMonth, e.selectedYear] = [a.getMonth(), a.getFullYear()]),
        E(e),
        w(e),
        L(e);
    },
    k = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          ArrowNext: (e) =>
            `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowNext}"data-calendar-arrow="next"></button>`,
          ArrowPrev: (e) =>
            `<button type="button"class="${e.CSSClasses.arrow} ${e.CSSClasses.arrowPrev}"data-calendar-arrow="prev"></button>`,
          ControlTime: (e) =>
            e.settings.selection.time
              ? `<div class="${e.CSSClasses.time}"></div>`
              : "",
          Days: (e) => `<div class="${e.CSSClasses.days}"></div>`,
          Month: (e) =>
            `<button type="button"class="${e.CSSClasses.month}"data-calendar-selected-month></button>`,
          Months: (e) => `<div class="${e.CSSClasses.months}"></div>`,
          Week: (e) => `<div class="${e.CSSClasses.week}"></div>`,
          WeekNumbers: (e) =>
            e.settings.visibility.weekNumbers
              ? `<div class="${e.CSSClasses.weekNumbers}"></div>`
              : "",
          Year: (e) =>
            `<button type="button"class="${e.CSSClasses.year}"data-calendar-selected-year></button>`,
          Years: (e) => `<div class="${e.CSSClasses.years}"></div>`,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Y = (e, t) =>
      t
        .replace(/[\n\t]/g, "")
        .replace(/<#(?!\/?Multiple)(.*?)>/g, (t, a) => {
          const n = ((s = a.replace(/[/\s\n\t]/g, "")), k[s]);
          var s;
          return n ? n(e) : "";
        })
        .replace(/[\n\t]/g, ""),
    x = (e, t) => {
      const {
          HTMLElement: a,
          CSSClasses: n,
          DOMTemplates: s,
          type: l,
          currentType: r,
          correctMonths: i,
        } = e,
        d = (s, l) => {
          if (!t) return;
          const r = a.querySelector(`.${n.controls}`);
          r && a.removeChild(r);
          a.querySelector(`.${n.grid}`).classList.add(n.gridDisabled);
          const i = t.closest(`.${n.column}`);
          i.classList.add(s), (i.innerHTML = Y(e, l));
        },
        o = {
          default: () => {
            a.classList.add(n.calendarDefault),
              a.classList.remove(n.calendarMonth, n.calendarYear),
              (a.innerHTML = Y(e, s.default));
          },
          multiple: () => {
            i &&
              (a.classList.add(n.calendarMultiple),
              a.classList.remove(n.calendarMonth, n.calendarYear),
              (a.innerHTML = ((e, t) =>
                t
                  .replace(/<#Multiple>(.*?)<#\/Multiple>/g, (t, a) => {
                    let n = "";
                    for (let t = 0; t < e.correctMonths; t++) n += a;
                    return n;
                  })
                  .replace(/[\n\t]/g, ""))(e, Y(e, s.multiple))));
          },
          month: () => {
            "multiple" !== l
              ? (a.classList.add(n.calendarMonth),
                a.classList.remove(n.calendarDefault, n.calendarYear),
                (a.innerHTML = Y(e, s.month)))
              : d(n.columnMonth, s.month);
          },
          year: () => {
            "multiple" !== l
              ? (a.classList.add(n.calendarYear),
                a.classList.remove(n.calendarDefault, n.calendarMonth),
                (a.innerHTML = Y(e, s.year)))
              : d(n.columnYear, s.year);
          },
        };
      a.classList.add(n.calendar), o[r]();
    },
    _ = (e, t, a, n, s) => {
      const l = t.cloneNode(!1);
      return (
        (l.className = `${e.CSSClasses.yearsYear}${
          a === s
            ? ` ${e.CSSClasses.yearsYearSelected}`
            : n
            ? ` ${e.CSSClasses.yearsYearDisabled}`
            : ""
        }`),
        (l.dataset.calendarYear = String(s)),
        (l.title = String(s)),
        (l.innerText = String(s)),
        n && (l.tabIndex = -1),
        l
      );
    },
    N = (e, t) => {
      const a = (null == t ? void 0 : t.dataset.calendarSelectedYear)
        ? Number(null == t ? void 0 : t.dataset.calendarSelectedYear)
        : e.selectedYear;
      (e.currentType = "year"), x(e, t), E(e), w(e);
      const n = e.HTMLElement.querySelector(`.${e.CSSClasses.years}`);
      if (!e.settings.selection.year || !n) return;
      n.classList.add(e.CSSClasses.yearsSelecting);
      const s = "multiple" !== e.type || e.selectedYear === a ? 0 : 1,
        l = document.createElement("button");
      l.type = "button";
      for (let t = e.viewYear - 7; t < e.viewYear + 8; t++) {
        const r =
            t < e.dateMin.getFullYear() + s || t > e.dateMax.getFullYear(),
          i = _(e, l, a, r, t);
        n.append(i), e.actions.getYears && e.actions.getYears(t, i, e);
      }
    },
    A = (e) =>
      `${e.charAt(0).toUpperCase()}${e.substring(1, e.length)}`.replace(
        /\./,
        ""
      ),
    F = (e, t) => {
      const a = new Date(`1978-01-0${t + 1}T00:00:00.000Z`).toLocaleString(
        e.settings.lang,
        { weekday: "short", timeZone: "UTC" }
      );
      e.locale.weekday.push(A(a));
    },
    I = (e, t) => {
      const a = new Date(
        `1978-${t + 1 <= 9 ? `0${t + 1}` : t + 1}-01T00:00:00.000Z`
      ).toLocaleString(e.settings.lang, { month: "long", timeZone: "UTC" });
      e.locale.months.push(A(a));
    },
    P = (e) => {
      if ("multiple" !== e.type) return 0;
      const t = [
        ...e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),
      ].findIndex((t) => t.classList.contains(`${e.CSSClasses.columnMonth}`));
      return t > 0 ? t : 0;
    },
    q = (e, t, a, n, s, l) => {
      const r = t.cloneNode(!1);
      return (
        (r.className = `${e.CSSClasses.monthsMonth}${
          a === l
            ? ` ${e.CSSClasses.monthsMonthSelected}`
            : s
            ? ` ${e.CSSClasses.monthsMonthDisabled}`
            : ""
        }`),
        (r.title = n),
        (r.innerText = `${
          e.settings.visibility.monthShort ? n.substring(0, 3) : n
        }`),
        (r.dataset.calendarMonth = String(l)),
        s && (r.tabIndex = -1),
        r
      );
    },
    B = (e, t) => {
      var a, n;
      const s = (null == t ? void 0 : t.dataset.calendarSelectedMonth)
          ? Number(t.dataset.calendarSelectedMonth)
          : e.selectedMonth,
        l =
          null ==
          (a = null == t ? void 0 : t.closest(`.${e.CSSClasses.column}`))
            ? void 0
            : a.querySelector(`.${e.CSSClasses.year}`),
        r = l ? Number(l.dataset.calendarSelectedYear) : e.selectedYear;
      (e.currentType = "month"), x(e, t), E(e);
      const i =
        null == (n = e.HTMLElement)
          ? void 0
          : n.querySelector(`.${e.CSSClasses.months}`);
      if (!e.settings.selection.month || !i) return;
      i.classList.add(e.CSSClasses.monthsSelecting);
      const d =
          e.jumpMonths > 1
            ? e.locale.months
                .map((t, a) => s - e.jumpMonths * a)
                .concat(e.locale.months.map((t, a) => s + e.jumpMonths * a))
                .filter((e) => e >= 0 && e <= 12)
            : Array.from(Array(12).keys()),
        o = document.createElement("button");
      o.type = "button";
      for (let t = 0; t < 12; t++) {
        const a = e.locale.months[t],
          n =
            (t < e.dateMin.getMonth() + P(e) && r <= e.dateMin.getFullYear()) ||
            (t > e.dateMax.getMonth() + P(e) && r >= e.dateMax.getFullYear()) ||
            (t !== s && !d.includes(t)),
          l = q(e, o, s, a, n, t);
        i.append(l), e.actions.getMonths && e.actions.getMonths(t, l, e);
      }
    },
    W = (e, t) =>
      e && t
        ? {
            0: { AM: "00", PM: "12" },
            1: { AM: "01", PM: "13" },
            2: { AM: "02", PM: "14" },
            3: { AM: "03", PM: "15" },
            4: { AM: "04", PM: "16" },
            5: { AM: "05", PM: "17" },
            6: { AM: "06", PM: "18" },
            7: { AM: "07", PM: "19" },
            8: { AM: "08", PM: "20" },
            9: { AM: "09", PM: "21" },
            10: { AM: "10", PM: "22" },
            11: { AM: "11", PM: "23" },
            12: { AM: "12", PM: "12" },
          }[Number(e)][t]
        : "",
    K = (e, t, a) => e.querySelector(`.${t}${a ? ` input[name="${a}"]` : ""}`),
    O = (e, t, a) => {
      e.addEventListener("mouseover", () => t.classList.add(a)),
        e.addEventListener("mouseout", () => t.classList.remove(a));
    },
    j = (e, t, a, n) => {
      ({
        hours: () => {
          e.selectedHours = a;
        },
        minutes: () => {
          e.selectedMinutes = a;
        },
      })[n](),
        (e.selectedTime = `${e.selectedHours}:${e.selectedMinutes}${
          e.selectedKeeping ? ` ${e.selectedKeeping}` : ""
        }`),
        e.actions.changeTime && e.actions.changeTime(t, e),
        e.input &&
          e.HTMLInputElement &&
          e.actions.changeToInput &&
          e.actions.changeToInput(t, e);
    },
    R = (e, t, a, n, s, l) => {
      t.addEventListener("input", (t) => {
        const r = t.target,
          i = Number(r.value),
          d = i < 10 ? `0${i}` : `${i}`;
        if ("hours" !== s || 12 !== l) return (a.value = d), void j(e, t, d, s);
        i < l && i > 0
          ? ((a.value = d),
            (e.selectedKeeping = "AM"),
            (n.innerText = e.selectedKeeping),
            j(e, t, d, s))
          : (0 === i
              ? ((e.selectedKeeping = "AM"), (n.innerText = "AM"))
              : ((e.selectedKeeping = "PM"), (n.innerText = "PM")),
            (a.value = y(r.value)),
            j(e, t, y(r.value), s));
      });
    },
    z = (e, t, a, n, s, l) => {
      a.addEventListener("change", (a) => {
        const r = a.target,
          i = Number(r.value),
          d = i < 10 ? `0${i}` : `${i}`;
        "hours" === s && 12 === l
          ? r.value && i <= l && i > 0
            ? ((r.value = d),
              (t.value = W(d, e.selectedKeeping)),
              j(e, a, d, s))
            : r.value && i < 24 && (i > l || 0 === i)
            ? (0 === i
                ? ((e.selectedKeeping = "AM"), (n.innerText = "AM"))
                : ((e.selectedKeeping = "PM"), (n.innerText = "PM")),
              (r.value = y(r.value)),
              (t.value = d),
              j(e, a, y(r.value), s))
            : (r.value = e.selectedHours)
          : r.value && i <= l && i >= 0
          ? ((r.value = d), (t.value = d), j(e, a, d, s))
          : "hours" === s
          ? (r.value = e.selectedHours)
          : "minutes" === s && (r.value = e.selectedMinutes);
      });
    },
    G = (e, t, a) => {
      const n = 24 === a ? 23 : a || 12,
        s = K(t, e.CSSClasses.timeRange, "hours"),
        l = K(t, e.CSSClasses.timeRange, "minutes"),
        r = K(t, e.CSSClasses.timeHours, "hours"),
        i = K(t, e.CSSClasses.timeMinutes, "minutes"),
        d = t.querySelector(`.${e.CSSClasses.timeKeeping}`);
      O(s, r, e.CSSClasses.isFocus),
        O(l, i, e.CSSClasses.isFocus),
        R(e, s, r, d, "hours", n),
        R(e, l, i, d, "minutes", 0),
        z(e, s, r, d, "hours", n),
        z(e, l, i, d, "minutes", 59),
        d &&
          ((e, t, a) => {
            t.addEventListener("click", (n) => {
              (e.selectedKeeping = t.innerText.includes("AM") ? "PM" : "AM"),
                (t.innerText = e.selectedKeeping),
                (a.value = W(e.selectedHours, e.selectedKeeping)),
                j(e, n, e.selectedHours, "hours");
            });
          })(e, d, s);
    },
    Z = (e, t, a, n) =>
      `<label class="${t}"><input type="text"name="${e}"maxlength="2"value="${a}"${
        n ? "disabled" : ""
      }></label>`,
    U = (e, t, a, n, s, l) =>
      `<label class="${t}"><input type="range"name="${e}"min="${a}"max="${n}"step="${s}"value="${l}"></label>`,
    V = (e) => {
      const t = [...e.locale.weekday];
      if (!t[0]) return;
      e.settings.iso8601 && t.push(t.shift());
      e.HTMLElement.querySelectorAll(`.${e.CSSClasses.week}`).forEach((a) =>
        ((e, t, a) => {
          const n = document.createElement("b");
          t.innerHTML = "";
          for (let s = 0; s < a.length; s++) {
            const l = a[s],
              r = n.cloneNode(!0);
            (r.className = `${e.CSSClasses.weekDay}`),
              (r.className = `${e.CSSClasses.weekDay}${
                e.settings.visibility.weekend && e.settings.iso8601
                  ? 5 === s || 6 === s
                    ? ` ${e.CSSClasses.weekDayWeekend}`
                    : ""
                  : !e.settings.visibility.weekend ||
                    e.settings.iso8601 ||
                    (0 !== s && 6 !== s)
                  ? ""
                  : ` ${e.CSSClasses.weekDayWeekend}`
              }`),
              (r.innerText = `${l}`),
              t.append(r);
          }
        })(e, a, t)
      );
    },
    X = ["light", "dark", "system"],
    J = {
      value: !1,
      set: () => {
        J.value = !0;
      },
      check: () => J.value,
    },
    Q = (e, t) =>
      X.find((a) => {
        var n;
        return (
          "system" !== a &&
          (null == (n = e.getAttribute(t)) ? void 0 : n.includes(a))
        );
      }),
    ee = (e, t) => {
      e.dataset.calendarTheme = t;
    },
    te = (e, t) => {
      var a;
      if (
        ((a = t),
        ee(e.HTMLElement, a.matches ? "dark" : "light"),
        "system" !== e.settings.visibility.theme || J.check())
      )
        return;
      const n = (t) => {
        const a = document.querySelectorAll(`.${e.CSSClasses.calendar}`);
        null == a || a.forEach((e) => ee(e, t.matches ? "dark" : "light"));
      };
      t.addEventListener ? t.addEventListener("change", n) : t.addListener(n),
        J.set();
    },
    ae = (e, t) => {
      const a = e.settings.visibility.themeDetect
        ? document.querySelector(e.settings.visibility.themeDetect)
        : null;
      if (!a) return void te(e, t);
      const n = e.settings.visibility.themeDetect.replace(
          /^.*\[(.+)\]/g,
          (e, t) => t
        ),
        s = Q(a, n);
      s
        ? (ee(e.HTMLElement, s),
          ((e, t, a) => {
            new MutationObserver((n) => {
              for (let s = 0; s < n.length; s++)
                if (n[s].attributeName === a) {
                  const n = Q(t, a);
                  n && ee(e.HTMLElement, n);
                  break;
                }
            }).observe(t, { attributes: !0 });
          })(e, a, n))
        : te(e, t);
    },
    ne = (e) => {
      const t = {
        default: () => {
          V(e), L(e);
        },
        multiple: () => {
          V(e), L(e);
        },
        month: () => B(e),
        year: () => N(e),
      };
      ((e) => {
        if (!X.includes(e.settings.visibility.theme)) throw new Error(p);
        if ("not all" === window.matchMedia("(prefers-color-scheme)").media)
          return void ee(e.HTMLElement, "light");
        ({
          light: () => ee(e.HTMLElement, "light"),
          dark: () => ee(e.HTMLElement, "dark"),
          system: () =>
            ae(e, window.matchMedia("(prefers-color-scheme: dark)")),
        })[e.settings.visibility.theme]();
      })(e),
        ((e) => {
          if (
            "define" !== e.settings.lang ||
            !e.locale.weekday[6] ||
            !e.locale.months[11]
          ) {
            if ("define" === e.settings.lang) throw new Error(S);
            (e.locale.weekday = []), (e.locale.months = []);
            for (let t = 0; t < 7; t++) F(e, t);
            for (let t = 0; t < 12; t++) I(e, t);
          }
        })(e),
        x(e),
        E(e),
        w(e),
        ((e) => {
          const t = e.HTMLElement.querySelector(`.${e.CSSClasses.time}`);
          if (!t) return;
          const a =
              !0 === e.settings.selection.time ? 12 : e.settings.selection.time,
            n = "range" === e.settings.selection.controlTime,
            [s, l] = [0, 23],
            [r, i] = [0, 59];
          (t.innerHTML = `<div class="${e.CSSClasses.timeContent}">${Z(
            "hours",
            e.CSSClasses.timeHours,
            e.selectedHours,
            n
          )}${Z("minutes", e.CSSClasses.timeMinutes, e.selectedMinutes, n)}${
            12 === a
              ? `<button type="button" class="${e.CSSClasses.timeKeeping}"${
                  n ? "disabled" : ""
                }>${e.selectedKeeping}</button>`
              : ""
          }</div><div class="${e.CSSClasses.timeRanges}">${U(
            "hours",
            e.CSSClasses.timeRange,
            s,
            l,
            e.settings.selection.stepHours,
            e.selectedKeeping
              ? W(e.selectedHours, e.selectedKeeping)
              : e.selectedHours
          )}${U(
            "minutes",
            e.CSSClasses.timeRange,
            r,
            i,
            e.settings.selection.stepMinutes,
            e.selectedMinutes
          )}</div>`),
            G(e, t, a);
        })(e),
        t[e.currentType]();
    },
    se = { self: null, rangeMin: void 0, rangeMax: void 0 },
    le = () => {
      var e;
      if (!(null == (e = se.self) ? void 0 : e.HTMLElement)) return;
      const { CSSClasses: t } = se.self;
      se.self.HTMLElement.querySelectorAll(
        `.${se.self.CSSClasses.dayBtnHover}`
      ).forEach((e) => {
        var a;
        e.classList.remove(se.self.CSSClasses.dayBtnHover),
          null == (a = e.parentElement) ||
            a.classList.remove(
              t.dayHoverIntermediate,
              t.dayHoverFirst,
              t.dayHoverLast
            );
      });
    },
    re = (e, t, a) => {
      var n, s, l;
      if (!(null == (n = se.self) ? void 0 : n.selectedDates)) return;
      const r = m(e),
        { CSSClasses: i } = se.self;
      if (null == (s = se.self.rangeDisabled) ? void 0 : s.includes(r)) return;
      const d =
        null == (l = se.self.HTMLElement)
          ? void 0
          : l.querySelectorAll(`[data-calendar-day="${r}"]`);
      null == d ||
        d.forEach((e) => {
          var t;
          e.classList.add(i.dayBtnHover),
            null == (t = e.parentElement) ||
              t.classList.add(i.dayHoverIntermediate);
        }),
        null == t ||
          t.forEach((e) => {
            var t;
            return null == (t = e.parentElement)
              ? void 0
              : t.classList.add(i.dayHoverFirst);
          }),
        null == a ||
          a.forEach((e) => {
            var t;
            return null == (t = e.parentElement)
              ? void 0
              : t.classList.add(i.dayHoverLast);
          });
    },
    ie = (e) => {
      var t;
      if (!e.target || !(null == (t = se.self) ? void 0 : t.selectedDates))
        return;
      if (!e.target.closest(`.${se.self.CSSClasses.days}`)) return void le();
      const a = e.target.closest("[data-calendar-day]");
      if (!a) return;
      const n = a.dataset.calendarDay,
        s = g(se.self.selectedDates[0]),
        l = g(n),
        r = se.self.HTMLElement.querySelectorAll(
          `[data-calendar-day="${se.self.selectedDates[0]}"]`
        ),
        i = se.self.HTMLElement.querySelectorAll(`[data-calendar-day="${n}"]`),
        [d, o] = s < l ? [r, i] : [i, r],
        [c, u] = s < l ? [s, l] : [l, s];
      le();
      for (let e = new Date(c); e <= u; e.setDate(e.getDate() + 1)) re(e, d, o);
    },
    de = (e) => {
      se.self &&
        "Escape" === e.key &&
        ((se.self.selectedDates = []),
        se.self.HTMLElement.removeEventListener("mousemove", ie),
        document.removeEventListener("keydown", de),
        ne(se.self));
    },
    oe = (e, t) => {
      var a;
      if (t) {
        const n =
          1 === e.selectedDates.length && e.selectedDates[0].includes(t);
        (e.selectedDates =
          n && !e.settings.selection.cancelableDay
            ? [t, t]
            : n && e.settings.selection.cancelableDay
            ? []
            : e.selectedDates.length > 1
            ? [t]
            : [...e.selectedDates, t]),
          null == (a = e.selectedDates) ||
            a.sort((e, t) => +new Date(e) - +new Date(t));
      }
      e.settings.range.disableGaps &&
        ((se.rangeMin = se.rangeMin ? se.rangeMin : e.rangeMin),
        (se.rangeMax = se.rangeMax ? se.rangeMax : e.rangeMax)),
        (se.self = e);
      const n = {
        set: () => {
          e.HTMLElement.addEventListener("mousemove", ie),
            document.addEventListener("keydown", de),
            e.settings.range.disableGaps &&
              (() => {
                var e, t, a;
                if (
                  !(null ==
                  (t = null == (e = se.self) ? void 0 : e.selectedDates)
                    ? void 0
                    : t[0]) ||
                  !se.self.rangeDisabled ||
                  (null == (a = se.self.rangeDisabled) ? void 0 : a.length) < 2
                )
                  return;
                const n = g(se.self.selectedDates[0]),
                  [s, l] = se.self.rangeDisabled
                    .map((e) => g(e))
                    .reduce(
                      ([e, t], a) => [
                        n >= a ? a : e,
                        n < a && null === t ? a : t,
                      ],
                      [null, null]
                    );
                s &&
                  (se.self.rangeMin = m(new Date(s.setDate(s.getDate() + 1)))),
                  l &&
                    (se.self.rangeMax = m(
                      new Date(l.setDate(l.getDate() - 1))
                    ));
              })();
        },
        reset: () => {
          const [t, a] = [
            e.selectedDates[0],
            e.selectedDates[e.selectedDates.length - 1],
          ];
          (e.selectedDates =
            e.selectedDates[0] !== e.selectedDates[e.selectedDates.length - 1]
              ? h([`${t}:${a}`])
              : [e.selectedDates[0], e.selectedDates[0]]),
            e.HTMLElement.removeEventListener("mousemove", ie),
            document.removeEventListener("keydown", de),
            e.settings.range.disableGaps &&
              se.self &&
              ((se.self.rangeMin = se.rangeMin),
              (se.self.rangeMax = se.rangeMax));
        },
      };
      n[1 === e.selectedDates.length ? "set" : "reset"]();
    },
    ce = (e, t, a) => {
      if (!t.dataset.calendarDay) return;
      const n = t.dataset.calendarDay,
        s = t.classList.contains(e.CSSClasses.dayBtnSelected);
      (s && !e.settings.selection.cancelableDay) ||
        (e.selectedDates = s
          ? e.selectedDates.filter((e) => e !== n)
          : a
          ? [...e.selectedDates, n]
          : [n]);
    },
    ue = (e, t, a, n, s) => {
      const l = e.HTMLElement.querySelectorAll(`.${e.CSSClasses.column}`),
        r = [...l].findIndex((e) => e.classList.contains(t)),
        i = Number(l[r].querySelector(`.${a}`).getAttribute(s));
      return "month" === e.currentType && r >= 0
        ? n - r
        : "year" === e.currentType && e.selectedYear !== i
        ? n - 1
        : n;
    },
    me = (e, t, a, n) => {
      if (!e.settings.selection[a]) return;
      const s = t.target,
        l = (e) => s.closest(`.${e}`),
        r = l(n.header),
        i = l(n.item),
        d = l(e.CSSClasses.grid),
        o = l(e.CSSClasses.column);
      if (e.currentType !== a && r) {
        ({ year: () => N(e, s), month: () => B(e, s) })[a]();
      } else
        i
          ? ((e, t, a, n, s) => {
              const l = {
                year: () => {
                  var a, n;
                  return null == (n = (a = e.actions).clickYear)
                    ? void 0
                    : n.call(a, t, e);
                },
                month: () => {
                  var a, n;
                  return null == (n = (a = e.actions).clickMonth)
                    ? void 0
                    : n.call(a, t, e);
                },
              };
              ({
                year: () => {
                  if ("multiple" === e.type) {
                    const t = ue(
                        e,
                        e.CSSClasses.columnYear,
                        e.CSSClasses.year,
                        Number(s.dataset.calendarYear),
                        "data-calendar-selected-year"
                      ),
                      a =
                        e.selectedMonth < e.dateMin.getMonth() &&
                        t <= e.dateMin.getFullYear(),
                      n =
                        e.selectedMonth > e.dateMax.getMonth() &&
                        t >= e.dateMax.getFullYear(),
                      l = t < e.dateMin.getFullYear(),
                      r = t > e.dateMax.getFullYear();
                    a || l
                      ? ((e.selectedYear = e.dateMin.getFullYear()),
                        (e.selectedMonth = e.dateMin.getMonth()))
                      : n || r
                      ? ((e.selectedYear = e.dateMax.getFullYear()),
                        (e.selectedMonth = e.dateMax.getMonth()))
                      : (e.selectedYear = t);
                  } else e.selectedYear = Number(s.dataset.calendarYear);
                },
                month: () => {
                  if ("multiple" === e.type) {
                    const t = ue(
                        e,
                        e.CSSClasses.columnMonth,
                        e.CSSClasses.month,
                        Number(s.dataset.calendarMonth),
                        "data-calendar-selected-month"
                      ),
                      a = s
                        .closest(`.${n.column}`)
                        .querySelector(`.${e.CSSClasses.year}`);
                    e.selectedYear = Number(a.dataset.calendarSelectedYear);
                    const l =
                        t < e.dateMin.getMonth() &&
                        e.selectedYear <= e.dateMin.getFullYear(),
                      r =
                        t > e.dateMax.getMonth() &&
                        e.selectedYear >= e.dateMax.getFullYear();
                    e.selectedMonth = l
                      ? e.dateMin.getMonth()
                      : r
                      ? e.dateMax.getMonth()
                      : t;
                  } else e.selectedMonth = Number(s.dataset.calendarMonth);
                },
              })[a](),
                l[a](),
                (e.currentType = e.type),
                ne(e);
            })(e, t, a, n, i)
          : ((e.currentType === a && r) ||
              ("multiple" === e.type && e.currentType === a && d && !o)) &&
            ((e.currentType = e.type), ne(e));
    },
    ge = (e) => {
      const t = (t) => {
        ((e, t) => {
          const a = t.target.closest(`.${e.CSSClasses.arrow}`);
          a &&
            (["default", "multiple"].includes(e.currentType)
              ? H(e, a.dataset.calendarArrow)
              : "year" === e.currentType &&
                void 0 !== e.viewYear &&
                ((e.viewYear += { prev: -15, next: 15 }[
                  a.dataset.calendarArrow
                ]),
                N(e, t.target)),
            e.actions.clickArrow && e.actions.clickArrow(t, e));
        })(e, t),
          ((e, t) => {
            var a;
            if (
              !e.settings.visibility.weekNumbers ||
              !e.actions.clickWeekNumber
            )
              return;
            const n = t.target.closest(`.${e.CSSClasses.weekNumber}`),
              s =
                null == (a = e.HTMLElement)
                  ? void 0
                  : a.querySelectorAll("[data-calendar-week-number]");
            if (!n || !s) return;
            const l = Number(n.innerText),
              r = Number(n.dataset.calendarYearWeek),
              i = [...s].filter(
                (e) => Number(e.dataset.calendarWeekNumber) === l
              );
            e.actions.clickWeekNumber(t, l, i, r, e);
          })(e, t),
          ((e, t) => {
            var a;
            const n = t.target,
              s = (e) => n.closest(`.${e}`),
              l = s(e.CSSClasses.dayBtn);
            if (
              !e.settings.selection.day ||
              !["single", "multiple", "multiple-ranged"].includes(
                e.settings.selection.day
              ) ||
              !l
            )
              return;
            ({
              single: () => ce(e, l, !1),
              multiple: () => ce(e, l, !0),
              "multiple-ranged": () => oe(e, l.dataset.calendarDay),
            })[e.settings.selection.day](),
              null == (a = e.selectedDates) ||
                a.sort((e, t) => +new Date(e) - +new Date(t)),
              e.actions.clickDay && e.actions.clickDay(t, e),
              e.input &&
                e.HTMLInputElement &&
                e.HTMLElement &&
                e.actions.changeToInput &&
                e.actions.changeToInput(t, e);
            const r = s(e.CSSClasses.dayBtnPrev),
              i = s(e.CSSClasses.dayBtnNext);
            ({
              prev: () => H(e, "prev"),
              next: () => H(e, "next"),
              default: () => L(e),
            })[r ? "prev" : i ? "next" : "default"]();
          })(e, t),
          me(e, t, "month", {
            header: e.CSSClasses.month,
            item: e.CSSClasses.monthsMonth,
            column: e.CSSClasses.columnMonth,
          }),
          me(e, t, "year", {
            header: e.CSSClasses.year,
            item: e.CSSClasses.yearsYear,
            column: e.CSSClasses.columnYear,
          });
      };
      return (
        e.HTMLElement.addEventListener("click", t),
        () => e.HTMLElement.removeEventListener("click", t)
      );
    },
    he = (e, { year: t, month: a, dates: n, holidays: s, time: r } = {}) => {
      var i;
      const d = l({}, e.settings.selected);
      (e.settings.selected.year = t ? d.year : e.selectedYear),
        (e.settings.selected.month = a ? d.month : e.selectedMonth),
        (e.settings.selected.holidays = s ? d.holidays : e.selectedHolidays),
        (e.settings.selected.time = r ? d.time : e.selectedTime),
        (e.settings.selected.dates =
          "only-first" === n && (null == (i = e.selectedDates) ? void 0 : i[0])
            ? [e.selectedDates[0]]
            : !0 === n
            ? d.dates
            : e.selectedDates),
        b(e),
        ne(e),
        (e.settings.selected = d),
        "multiple-ranged" === e.settings.selection.day && n && oe(e);
    },
    ye = (e, t, a, n) => {
      const s = {
          top: -t.offsetHeight,
          bottom: e.offsetHeight,
          left: 0,
          center: e.offsetWidth / 2 - t.offsetWidth / 2,
          right: e.offsetWidth - t.offsetWidth,
        },
        l = Array.isArray(a) ? a[0] : "bottom",
        r = Array.isArray(a) ? a[1] : a;
      t.classList.add(
        "bottom" === l ? n.calendarToInputBottom : n.calendarToInputTop
      );
      const i = e.getBoundingClientRect(),
        d = window.scrollX || document.documentElement.scrollLeft,
        o = window.scrollY || document.documentElement.scrollTop,
        c = i.top + o + s[l],
        u = i.left + d + s[r];
      Object.assign(t.style, { left: `${u}px`, top: `${c}px` });
    },
    ve = (e) => {
      let t = !0;
      const a = [];
      e.HTMLInputElement = e.HTMLElement;
      const n = () =>
          ye(
            e.HTMLInputElement,
            e.HTMLElement,
            e.settings.visibility.positionToInput,
            e.CSSClasses
          ),
        s = (t) => {
          var a;
          e &&
            t.target !== e.HTMLInputElement &&
            !(null == (a = e.HTMLElement) ? void 0 : a.contains(t.target)) &&
            (e.HTMLInputElement && e.HTMLElement && e.hide(),
            window.removeEventListener("resize", n),
            document.removeEventListener("click", s, { capture: !0 }));
        };
      return (
        e.HTMLInputElement.addEventListener("click", () => {
          t
            ? a.push(
                (() => {
                  const a = document.createElement("div");
                  return (
                    (a.className = `${e.CSSClasses.calendar} ${e.CSSClasses.calendarToInput} ${e.CSSClasses.calendarHidden}`),
                    (e.HTMLElement = a),
                    document.body.append(e.HTMLElement),
                    (t = !1),
                    setTimeout(() => {
                      ye(
                        e.HTMLInputElement,
                        a,
                        e.settings.visibility.positionToInput,
                        e.CSSClasses
                      ),
                        e.show();
                    }, 0),
                    he(e, {
                      year: !0,
                      month: !0,
                      dates: !0,
                      holidays: !0,
                      time: !0,
                    }),
                    e.actions.initCalendar && e.actions.initCalendar(e),
                    ge(e)
                  );
                })()
              )
            : (ye(
                e.HTMLInputElement,
                e.HTMLElement,
                e.settings.visibility.positionToInput,
                e.CSSClasses
              ),
              e.show()),
            window.addEventListener("resize", n),
            document.addEventListener("click", s, { capture: !0 });
        }),
        () => {
          a.forEach((e) => e());
        }
      );
    };
  return class extends u {
    constructor(e, t) {
      if (
        (super(),
        r(this, "init", () => {
          return (
            ((e = this).HTMLOriginalElement = e.HTMLElement.cloneNode(!0)),
            (e.isInit = !0),
            e.input
              ? ve(e)
              : (b(e),
                ne(e),
                e.actions.initCalendar && e.actions.initCalendar(e),
                ge(e))
          );
          var e;
        }),
        r(this, "update", (e) =>
          ((e, { year: t, month: a, dates: n, holidays: s, time: l } = {}) => {
            if (!e.isInit) throw new Error(M);
            he(e, { year: t, month: a, dates: n, holidays: s, time: l }),
              e.actions.updateCalendar && e.actions.updateCalendar(e);
          })(this, e)
        ),
        r(this, "destroy", () =>
          ((e) => {
            var t, a, n, s;
            if (!e.isInit) throw new Error(M);
            e.input
              ? (null ==
                  (a =
                    null == (t = e.HTMLElement) ? void 0 : t.parentElement) ||
                  a.removeChild(e.HTMLElement),
                null == (n = e.HTMLInputElement) ||
                  n.replaceWith(e.HTMLOriginalElement),
                (e.HTMLInputElement = void 0))
              : null == (s = e.HTMLElement) ||
                s.replaceWith(e.HTMLOriginalElement),
              (e.HTMLElement = e.HTMLOriginalElement),
              e.actions.destroyCalendar && e.actions.destroyCalendar(e);
          })(this)
        ),
        r(this, "show", () => {
          var e;
          (e = this).currentType
            ? (e.HTMLElement.classList.remove(e.CSSClasses.calendarHidden),
              e.actions.showCalendar && e.actions.showCalendar(e))
            : e.HTMLElement.click();
        }),
        r(this, "hide", () => {
          var e;
          (e = this).currentType &&
            (e.HTMLElement.classList.add(e.CSSClasses.calendarHidden),
            e.actions.hideCalendar && e.actions.hideCalendar(e));
        }),
        (this.HTMLElement =
          "string" == typeof e ? document.querySelector(e) : e),
        !this.HTMLElement)
      )
        throw new Error(v(e));
      if (!t) return;
      const a = (e, t) => {
        Object.keys(t).forEach((n) => {
          "object" != typeof e[n] ||
          "object" != typeof t[n] ||
          t[n] instanceof Date
            ? (e[n] = t[n])
            : a(e[n], t[n]);
        });
      };
      a(this, t);
    }
  };
});
