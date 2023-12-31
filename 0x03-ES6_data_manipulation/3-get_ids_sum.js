/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @author Wisdom Okoroafor <https://github.com/wisdomoo>
 * @returns {Number}
 */
export default function getStudentIdsSum(lists) {
  if (lists instanceof Array) {
    return lists.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
