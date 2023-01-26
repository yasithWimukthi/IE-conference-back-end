const getMeetingsBelongsToUser  = async (req, res) => {
    const id = req.params.id;
    const findMeetingsSql = "SELECT * FROM meeting WHERE created_by = ?";
    dbConn.query(findMeetingsSql, [id], function (error, meetings) {
        res.status(200).jsonp(meetings);
    });
}

const getMeetingByMeetingId = async (req, res) => {
    const id = req.params.id;
    const findMeetingSql = "SELECT * FROM meeting WHERE meeting_uid = ?";
    dbConn.query(findMeetingSql, [id], function (error, meeting) {
        res.status(200).jsonp(meeting);
    });
}

module.exports = {
    getMeetingsBelongsToUser,
    getMeetingByMeetingId
}