import { format, isToday, isYesterday, parse } from "date-fns";
import moment from 'moment';

export function formatDate(inputDateStr) {
  if (!inputDateStr) return "";

  // Normalize input
  let cleanDateStr = inputDateStr.trim().replace(/\s+/g, " ");
  cleanDateStr = cleanDateStr.replace(/,(\s)?/g, ", "); // ensure space after comma

  // Capitalize month names (e.g., "oct" → "Oct")
  cleanDateStr = cleanDateStr.replace(
    /\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/gi,
    (m) => m.charAt(0).toUpperCase() + m.slice(1).toLowerCase()
  );

  // Try multiple known patterns
  const possibleFormats = [
    "d MMM yyyy, h:mm a",
    "d MMM yyyy, hh:mm a",
    "dd MMM yyyy, h:mm a",
    "dd MMM yyyy, hh:mm a",
    "d MMM yyyy h:mm a",
    "d MMM yyyy hh:mm a",
    "dd MMM yyyy h:mm a",
    "dd MMM yyyy hh:mm a",
  ];

  let parsedDate = null;
  for (const fmt of possibleFormats) {
    try {
      const temp = parse(cleanDateStr, fmt, new Date());
      if (!isNaN(temp)) {
        parsedDate = temp;
        break;
      }
    } catch (_) {}
  }

  // Fallback to JS Date if all parsing fails
  if (!parsedDate || isNaN(parsedDate)) {
    parsedDate = new Date(cleanDateStr);
    if (isNaN(parsedDate)) return inputDateStr; // can't parse, return as is
  }

  // Format output: single-digit day/hour
  const timeFormat = "h:mm a"; // not hh → no leading 0
  const dateFormat = "d MMM yyyy"; // not dd → no leading 0

  if (isToday(parsedDate)) {
    return `Today, ${format(parsedDate, timeFormat)}`;
  } else if (isYesterday(parsedDate)) {
    return `Yesterday, ${format(parsedDate, timeFormat)}`;
  } else {
    return `${format(parsedDate, `${dateFormat}, ${timeFormat}`)}`;
  }
}

export function formatDateWithoutYear(date) {
  return moment(date).format('D MMM, h:mm A');
}
