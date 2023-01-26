const getMeetingsBelongsToUser  = async (req, res) => {
    const id = req.params.id;
    const findMeetingsSql = "SELECT * FROM meeting WHERE created_by = ?";
    dbConn.query(findMeetingsSql, [id], function (error, meetings) {
        res.status(200).jsonp(meetings);
    });
}

module.exports = {
    getMeetingsBelongsToUser
}