"""
ADD YOUR ENTITY CLASSES HERE
"""
from typing import List


class Day:
    MON = "MON"
    TUE = "TUE"
    WED = "WED"
    THU = "THU"
    FRI = "FRI"
    SAT = "SAT"
    SUN = "SUN"


class LessonType:
    LEC = "LECTURE"
    TUT = "TUTORIAL"
    LAB = "LAB"


class Lesson:

    def __init__(self, index: str, ltype: LessonType, group: str,
                 day: str, t_full: str, t_start: str, t_end: str,
                 duration: float, location: int, flag: int, remarks: str):
        self.index = index
        self.ltype = ltype
        self.group = group
        self.day = day
        self.t_full = t_full
        self.t_start = t_start
        self.t_end = t_end
        self.duration = duration
        self.location = location
        self.flag = flag
        self.remarks = remarks


class Index:
    def __init__(self, index: str, lessons: List[Lesson]):
        self.index = index
        self.lessons = lessons


class Course:
    def __init__(self, code: str, name: str, au: int, indexes: List[Index]):
        self.code = code
        self.name = name
        self.au = au
        self.indexes = indexes
