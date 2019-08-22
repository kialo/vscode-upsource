import callMethod from './callMethod';
import * as MessageTypes from './MessageTypes';

/**
 * Accepts the end user agreement for a given user
 */
export function acceptUserAgreement(): Promise<MessageTypes.VoidMessage> {
	return callMethod('acceptUserAgreement');
}

/**
 * Returns the text of the end user agreement
 */
export function getUserAgreementText(): Promise<MessageTypes.UserAgreementTextDTO> {
	return callMethod('getUserAgreementText');
}

/**
 * In the case of an empty request, returns the list of all short project infos. Otherwise returns the list of project infos for a given set of project IDs. In any case only the projects the user has access to are returned.
 */
export function getAllProjects(request: MessageTypes.ProjectIdListDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
	return callMethod('getAllProjects', request);
}

/**
 * Returns the list of projects  matching a given search criteria
 */
export function findProjects(request: MessageTypes.FindProjectsRequestDTO): Promise<MessageTypes.ShortProjectInfoListDTO> {
	return callMethod('findProjects', request);
}

/**
 * Returns basic information about the project - name, project model, latest revision, etc.
 */
export function getProjectInfo(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectInfoDTO> {
	return callMethod('getProjectInfo', request);
}

/**
 * Returns VCS repository URL(s) for a given project
 */
export function getProjectVcsLinks(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VcsRepoListDTO> {
	return callMethod('getProjectVcsLinks', request);
}

/**
 * Returns README (README.md) contents from the latest revision
 */
export function getProjectReadme(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectReadmeResponseDTO> {
	return callMethod('getProjectReadme', request);
}

/**
 * Returns all registered code review patterns across all projects
 */
export function getCodeReviewPatterns(): Promise<MessageTypes.CodeReviewPatternsDTO> {
	return callMethod('getCodeReviewPatterns');
}

/**
 * Returns the revision descriptor for the latest revision - ID, date, commit message, authors, parent revisions, etc.
 */
export function getHeadRevision(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.RevisionInfoDTO> {
	return callMethod('getHeadRevision', request);
}

/**
 * Returns the list of revisions in a given project (optionally with revision graph)
 */
export function getRevisionsList(request: MessageTypes.RevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return callMethod('getRevisionsList', request);
}

/**
 * Returns the list of revisions that match the given search query
 */
export function getRevisionsListFiltered(request: MessageTypes.RevisionsListFilteredRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return callMethod('getRevisionsListFiltered', request);
}

/**
 * Returns the list of revisions across all projects authored by the specified user and (optionally) matching the specified query
 */
export function getUserRevisionsList(request: MessageTypes.UserRevisionsListRequestDTO): Promise<MessageTypes.RevisionDescriptorListDTO> {
	return callMethod('getUserRevisionsList', request);
}

/**
 * Returns the list of revisions since the given revision
 */
export function getRevisionsListUpdate(request: MessageTypes.RevisionsListUpdateRequestDTO): Promise<MessageTypes.RevisionsListUpdateResponseDTO> {
	return callMethod('getRevisionsListUpdate', request);
}

/**
 * Returns the revision descriptor - ID, date, commit message, authors, parent revisions, etc.
 */
export function getRevisionInfo(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionInfoDTO> {
	return callMethod('getRevisionInfo', request);
}

/**
 * Returns the list of changes (files that were added, removed, or modified) in a revision
 */
export function getRevisionChanges(request: MessageTypes.RevisionChangesRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return callMethod('getRevisionChanges', request);
}

/**
 * Returns the list of branches a revision is part of
 */
export function getRevisionBranches(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.RevisionBranchesResponseDTO> {
	return callMethod('getRevisionBranches', request);
}

/**
 * Returns the project structure tree starting from the given file
 */
export function getProjectSubtree(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.ProjectItemsListDTO> {
	return callMethod('getProjectSubtree', request);
}

/**
 * Returns meta information about a file (is deleted, is latest revision, etc.)
 */
export function getFileMeta(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileMetaResponseDTO> {
	return callMethod('getFileMeta', request);
}

/**
 * Returns the line-by-line file annotation
 */
export function getFileAnnotation(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileAnnotationResponseDTO> {
	return callMethod('getFileAnnotation', request);
}

/**
 * Returns the file contributors
 */
export function getFileContributors(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContributorsResponseDTO> {
	return callMethod('getFileContributors', request);
}

/**
 * Returns the authors of the given file fragment
 */
export function getFileFragmentAuthors(request: MessageTypes.FileFragmentAuthorsRequestDTO): Promise<MessageTypes.UsersListDTO> {
	return callMethod('getFileFragmentAuthors', request);
}

/**
 * Returns the history (list of revision IDs and change types) of the file
 */
export function getFileHistory(request: MessageTypes.FileHistoryRequestDTO): Promise<MessageTypes.FileHistoryResponseDTO> {
	return callMethod('getFileHistory', request);
}

/**
 * Returns the diff (changed lines and ranges) between the given revisions of a file
 */
export function getFileDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
	return callMethod('getFileDiff', request);
}

/**
 * Returns the inline diff (changed lines and ranges, line numbers mapping) for the given file
 */
export function getFileInlineDiff(request: MessageTypes.FileDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return callMethod('getFileInlineDiff', request);
}

/**
 * Returns the inline diff of a file after the merge with the base branch
 */
export function getFileMergeInlineDiff(request: MessageTypes.FileMergeInlineDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return callMethod('getFileMergeInlineDiff', request);
}

/**
 * Returns the contents of the given file
 */
export function getFileContent(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.FileContentResponseDTO> {
	return callMethod('getFileContent', request);
}

/**
 * Returns the semantic markup of the given file
 */
export function getFilePsi(request: MessageTypes.FilePsiRequestDTO): Promise<MessageTypes.FilePsiResponseDTO> {
	return callMethod('getFilePsi', request);
}

/**
 * Returns the text range of the given PSI element
 */
export function getStubNavigationRange(request: MessageTypes.StubIdDTO): Promise<MessageTypes.NavigationTargetItemDTO> {
	return callMethod('getStubNavigationRange', request);
}

/**
 * Returns the text representation of the given PSI element
 */
export function getElementDescription(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.TargetDescriptionDTO> {
	return callMethod('getElementDescription', request);
}

/**
 * Returns the documentation (e.g. Javadoc) for the given PSI element
 */
export function getElementDocumentation(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.ElementDocumentationDTO> {
	return callMethod('getElementDocumentation', request);
}

/**
 * Returns the list of usages for the given PSI element
 */
export function findUsages(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindUsagesResponseDTO> {
	return callMethod('findUsages', request);
}

/**
 * Returns the usages diff for the given PSI element between two revisions
 */
export function getUsagesDiff(request: MessageTypes.UsagesDiffRequestDTO): Promise<MessageTypes.UsagesDiffResponseDTO> {
	return callMethod('getUsagesDiff', request);
}

/**
 * Returns the list of inheritors and ancestors for the given PSI element
 */
export function findHierarchy(request: MessageTypes.PsiElementIdDTO): Promise<MessageTypes.FindHierarchyResultDTO> {
	return callMethod('findHierarchy', request);
}

/**
 * Returns the files matched by the search query in a given revision, review, project-wide, or service-wide
 */
export function gotoFileByName(request: MessageTypes.GotoFileRequestDTO): Promise<MessageTypes.GotoFileResponseDTO> {
	return callMethod('gotoFileByName', request);
}

/**
 * Performs full-text search across all commits and files (either service-wide or project-wide)
 */
export function textSearch(request: MessageTypes.TextSearchRequestDTO): Promise<MessageTypes.TextSearchResponseDTO> {
	return callMethod('textSearch', request);
}

/**
 * Performs project-wide search by branch name
 */
export function findBranches(request: MessageTypes.FindBranchRequestDTO): Promise<MessageTypes.FindBranchResponseDTO> {
	return callMethod('findBranches', request);
}

/**
 * Returns the list of changes in the given branch
 */
export function getBranchDiff(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return callMethod('getBranchDiff', request);
}

/**
 * Returns the list of changes between any two revisions
 */
export function getRevisionsDiff(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.RevisionsDiffDTO> {
	return callMethod('getRevisionsDiff', request);
}

/**
 * Compare page
 */
export function getCompareInfo(request: MessageTypes.CompareRequestDTO): Promise<MessageTypes.CompareInfoDTO> {
	return callMethod('getCompareInfo', request);
}

/**
 * Revision graph for compare page
 */
export function getCompareGraph(request: MessageTypes.RevisionsDiffRequestDTO): Promise<MessageTypes.CompareGraphDTO> {
	return callMethod('getCompareGraph', request);
}

/**
 * Branch page
 */
export function getBranchInfo(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchInfoDTO> {
	return callMethod('getBranchInfo', request);
}

/**
 * Revision graph for branch page
 */
export function getBranchGraph(request: MessageTypes.BranchRequestDTO): Promise<MessageTypes.BranchGraphDTO> {
	return callMethod('getBranchGraph', request);
}

/**
 * Returns the list of branches in a project
 */
export function getBranches(request: MessageTypes.BranchesRequestDTO): Promise<MessageTypes.BranchListDTO> {
	return callMethod('getBranches', request);
}

/**
 * Finds commit(s) with the given commit hash
 */
export function findCommits(request: MessageTypes.FindCommitsRequestDTO): Promise<MessageTypes.FindCommitsResponseDTO> {
	return callMethod('findCommits', request);
}

/**
 * Returns the discussions in the project, matching given query
 */
export function getProjectDiscussions(request: MessageTypes.DiscussionsInProjectRequestDTO): Promise<MessageTypes.DiscussionsInProjectDTO> {
	return callMethod('getProjectDiscussions', request);
}

/**
 * Returns the discussions in the given file
 */
export function getFileDiscussions(request: MessageTypes.FileInRevisionDTO): Promise<MessageTypes.DiscussionsInFileDTO> {
	return callMethod('getFileDiscussions', request);
}

/**
 * Returns the discussions in the given revision
 */
export function getInlineDiscussionsInRevision(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
	return callMethod('getInlineDiscussionsInRevision', request);
}

/**
 * Creates a new discussion
 */
export function createDiscussion(request: MessageTypes.CreateDiscussionRequestDTO): Promise<MessageTypes.DiscussionInFileDTO> {
	return callMethod('createDiscussion', request);
}

/**
 * Updates a discussion
 */
export function resolveDiscussion(request: MessageTypes.ResolveDiscussionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('resolveDiscussion', request);
}

/**
 * Checks if current user can resolve the given discussion
 */
export function getCurrentUserCanResolveDiscussion(request: MessageTypes.DiscussionIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('getCurrentUserCanResolveDiscussion', request);
}

/**
 * Adds a label to a discussion
 */
export function addDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return callMethod('addDiscussionLabel', request);
}

/**
 * Adds a label to a review
 */
export function addReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
	return callMethod('addReviewLabel', request);
}

/**
 * Removes a label from a discussion
 */
export function removeDiscussionLabel(request: MessageTypes.UpdateDiscussionLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('removeDiscussionLabel', request);
}

/**
 * Removes a label from a review
 */
export function removeReviewLabel(request: MessageTypes.UpdateReviewLabelRequestDTO): Promise<MessageTypes.UpdateReviewLabelResponseDTO> {
	return callMethod('removeReviewLabel', request);
}

/**
 * Stars a discussion
 */
export function starDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('starDiscussion', request);
}

/**
 * Toggles the read/unread state of a discussion
 */
export function readDiscussion(request: MessageTypes.UpdateDiscussionFlagRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('readDiscussion', request);
}

/**
 * Adds a comment to the discussion
 */
export function addComment(request: MessageTypes.AddCommentRequestDTO): Promise<MessageTypes.CommentDTO> {
	return callMethod('addComment', request);
}

/**
 * Updates the comment
 */
export function updateComment(request: MessageTypes.UpdateCommentRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
	return callMethod('updateComment', request);
}

/**
 * Removes the comment
 */
export function removeComment(request: MessageTypes.RemoveCommentRequestDTO): Promise<MessageTypes.RemoveCommentResponseDTO> {
	return callMethod('removeComment', request);
}

/**
 * Updates the task list embedded in a comment
 */
export function updateTaskList(request: MessageTypes.UpdateTaskListRequestDTO): Promise<MessageTypes.UpdateCommentResponseDTO> {
	return callMethod('updateTaskList', request);
}

/**
 * Adds or removes a reaction to a specified target
 */
export function toggleReaction(request: MessageTypes.ToggleReactionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('toggleReaction', request);
}

/**
 * Returns the news feed
 */
export function getFeed(request: MessageTypes.FeedRequestDTO): Promise<MessageTypes.FeedDTO> {
	return callMethod('getFeed', request);
}

/**
 * Returns the discussions in the given revision
 */
export function getRevisionDiscussions(request: MessageTypes.RevisionInProjectDTO): Promise<MessageTypes.DiscussionsInRevisionDTO> {
	return callMethod('getRevisionDiscussions', request);
}

/**
 * Returns short review information for a set of revisions
 */
export function getRevisionReviewInfo(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionReviewInfoListDTO> {
	return callMethod('getRevisionReviewInfo', request);
}

/**
 * Returns review suggestions for a set of revisions
 */
export function getSuggestedReviewsForRevisions(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.SuggestedReviewListDTO> {
	return callMethod('getSuggestedReviewsForRevisions', request);
}

/**
 * Returns review suggestion for the uncommitted revision
 */
export function getSuggestedReviewForGhosts(request: MessageTypes.UncommittedRevisionDTO): Promise<MessageTypes.ReviewSuggestDTO> {
	return callMethod('getSuggestedReviewForGhosts', request);
}

/**
 * Returns discussion counters for a set of revisions
 */
export function getRevisionDiscussionCounters(request: MessageTypes.RevisionDiscussionCountersRequestDTO): Promise<MessageTypes.RevisionDiscussionCountersListDTO> {
	return callMethod('getRevisionDiscussionCounters', request);
}

/**
 * Returns build status for revisions
 */
export function getRevisionBuildStatus(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionBuildStatusListDTO> {
	return callMethod('getRevisionBuildStatus', request);
}

/**
 * Returns the code ownership summary for given revisions
 */
export function getRevisionsOwnershipSummary(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsOwnershipSummaryDTO> {
	return callMethod('getRevisionsOwnershipSummary', request);
}

/**
 * Returns the diff of external inspections compared to the previous run
 */
export function getRevisionsExternalInspectionsDiff(request: MessageTypes.RevisionListDTO): Promise<MessageTypes.RevisionsExternalInspectionsDiffResponseDTO> {
	return callMethod('getRevisionsExternalInspectionsDiff', request);
}

/**
 * Returns the suggested users to be mentioned in a comment
 */
export function getUsersForMention(request: MessageTypes.UsersForMentionRequestDTO): Promise<MessageTypes.UsersListDTO> {
	return callMethod('getUsersForMention', request);
}

/**
 * Returns the suggested reviewers for a given review
 */
export function getUsersForReview(request: MessageTypes.UsersForReviewRequestDTO): Promise<MessageTypes.UsersForReviewDTO> {
	return callMethod('getUsersForReview', request);
}

/**
 * Returns the list of non-empty user groups relevant to a given project
 */
export function getProjectUserGroups(request: MessageTypes.ProjectUserGroupsRequestDTO): Promise<MessageTypes.UserGroupsListDTO> {
	return callMethod('getProjectUserGroups', request);
}

/**
 * Returns the list of user groups by given IDs
 */
export function getUserGroupsByIds(request: MessageTypes.UserGroupsIdsListDTO): Promise<MessageTypes.UserGroupsListDTO> {
	return callMethod('getUserGroupsByIds', request);
}

/**
 * Returns the list of users matching a given search criteria
 */
export function findUsers(request: MessageTypes.FindUsersRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
	return callMethod('findUsers', request);
}

/**
 * Returns the list of discussion labels
 */
export function getLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
	return callMethod('getLabels', request);
}

/**
 * Returns the list of review labels
 */
export function getReviewLabels(request: MessageTypes.LabelsRequestDTO): Promise<MessageTypes.LabelsListDTO> {
	return callMethod('getReviewLabels', request);
}

/**
 * Returns the list of reviews
 */
export function getReviews(request: MessageTypes.ReviewsRequestDTO): Promise<MessageTypes.ReviewListDTO> {
	return callMethod('getReviews', request);
}

/**
 * Creates a review
 */
export function createReview(request: MessageTypes.CreateReviewRequestDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
	return callMethod('createReview', request);
}

/**
 * Closes a review
 */
export function closeReview(request: MessageTypes.CloseReviewRequestDTO): Promise<MessageTypes.CloseReviewResponseDTO> {
	return callMethod('closeReview', request);
}

/**
 * Renames a review
 */
export function renameReview(request: MessageTypes.RenameReviewRequestDTO): Promise<MessageTypes.RenameReviewResponseDTO> {
	return callMethod('renameReview', request);
}

/**
 * Sets review description
 */
export function editReviewDescription(request: MessageTypes.EditReviewDescriptionRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('editReviewDescription', request);
}

/**
 * Returns review details
 */
export function getReviewDetails(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewDescriptorDTO> {
	return callMethod('getReviewDetails', request);
}

/**
 * Returns the code ownership summary for a given review
 */
export function getReviewOwnershipSummary(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewOwnershipSummaryDTO> {
	return callMethod('getReviewOwnershipSummary', request);
}

/**
 * Returns participants' progress in a given review
 */
export function getReviewProgress(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.ReviewProgressDTO> {
	return callMethod('getReviewProgress', request);
}

/**
 * Returns the diff of inspections between two revisions
 */
export function getReviewInspectionsDiff(request: MessageTypes.ReviewInspectionsDiffRequestDTO): Promise<MessageTypes.InspectionsDiffDTO> {
	return callMethod('getReviewInspectionsDiff', request);
}

/**
 * Attaches a revision to a review
 */
export function addRevisionToReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('addRevisionToReview', request);
}

/**
 * Initiates branch tracking for a given review
 */
export function startBranchTracking(request: MessageTypes.StartBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('startBranchTracking', request);
}

/**
 * Stops branch tracking for a given review
 */
export function stopBranchTracking(request: MessageTypes.StopBranchTrackingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('stopBranchTracking', request);
}

/**
 * Rebase the review to a single squashed revision
 */
export function squashReviewRevisions(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('squashReviewRevisions', request);
}

/**
 * Removes a revision from a review
 */
export function removeRevisionFromReview(request: MessageTypes.RevisionsInReviewDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('removeRevisionFromReview', request);
}

/**
 * Returns the list of revisions in a review
 */
export function getRevisionsInReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.RevisionsInReviewResponseDTO> {
	return callMethod('getRevisionsInReview', request);
}

/**
 * Returns the list of suggested revisions for a particular review
 */
export function getSuggestedRevisionsForReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.SuggestedRevisionListDTO> {
	return callMethod('getSuggestedRevisionsForReview', request);
}

/**
 * Adds a participant (reviewer or watcher) to a review
 */
export function addParticipantToReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('addParticipantToReview', request);
}

/**
 * Adds a group of participants (reviewers or watchers) to a review
 */
export function addGroupToReview(request: MessageTypes.AddGroupToReviewRequestDTO): Promise<MessageTypes.AddGroupToReviewResponseDTO> {
	return callMethod('addGroupToReview', request);
}

/**
 * Updates the participant's state
 */
export function updateParticipantInReview(request: MessageTypes.UpdateParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('updateParticipantInReview', request);
}

/**
 * Removes a participant from a review
 */
export function removeParticipantFromReview(request: MessageTypes.ParticipantInReviewRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('removeParticipantFromReview', request);
}

/**
 * Mutes activities taking place in a certain review or cancels muting that was previously set
 */
export function toggleReviewMuted(request: MessageTypes.ToggleReviewMutedRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('toggleReviewMuted', request);
}

/**
 * Sets/clears review due date
 */
export function setReviewDeadline(request: MessageTypes.ReviewDeadlineRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setReviewDeadline', request);
}

/**
 * Merge review: sets target branch
 */
export function setReviewTargetBranch(request: MessageTypes.ReviewTargetBranchDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setReviewTargetBranch', request);
}

/**
 * Returns the list of changes (sum of all revisions) in a review
 */
export function getReviewSummaryChanges(request: MessageTypes.ReviewSummaryChangesRequestDTO): Promise<MessageTypes.ReviewSummaryChangesResponseDTO> {
	return callMethod('getReviewSummaryChanges', request);
}

/**
 * Returns the diff (sum of all revisions) of a file in review
 */
export function getFileInReviewSummaryInlineChanges(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileInlineDiffResponseDTO> {
	return callMethod('getFileInReviewSummaryInlineChanges', request);
}

/**
 * Returns the diff (sum of all revisions) of a file in review
 */
export function getFileInReviewSummaryDiff(request: MessageTypes.FileInReviewDiffRequestDTO): Promise<MessageTypes.FileDiffResponseDTO> {
	return callMethod('getFileInReviewSummaryDiff', request);
}

/**
 * Track file read status
 */
export function setFileInReviewReadStatus(request: MessageTypes.FileInReviewReadStatusRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setFileInReviewReadStatus', request);
}

/**
 * Returns the review discussions
 */
export function getReviewSummaryDiscussions(request: MessageTypes.ReviewSummaryDiscussionsRequestDTO): Promise<MessageTypes.DiscussionsInFilesDTO> {
	return callMethod('getReviewSummaryDiscussions', request);
}

/**
 * Removes the review
 */
export function removeReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('removeReview', request);
}

/**
 * Returns matching revisions for stacktrace
 */
export function getMatchingRevisionsForStacktrace(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.MatchingRevisionsResponseDTO> {
	return callMethod('getMatchingRevisionsForStacktrace', request);
}

/**
 * Returns full paths and vcs commit ids for lines of stacktrace in context of revision
 */
export function getStacktraceInContextOfRevision(request: MessageTypes.StacktraceDTO): Promise<MessageTypes.StacktracePositionsDTO> {
	return callMethod('getStacktraceInContextOfRevision', request);
}

/**
 * Returns the user info for a currently logged-in user
 */
export function getCurrentUser(): Promise<MessageTypes.CurrentUserResponseDTO> {
	return callMethod('getCurrentUser');
}

/**
 * Checks if current user can close given review
 */
export function getCurrentUserCanCloseReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('getCurrentUserCanCloseReview', request);
}

/**
 * Checks if current user can delete given review
 */
export function getCurrentUserCanDeleteReview(request: MessageTypes.ReviewIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('getCurrentUserCanDeleteReview', request);
}

/**
 * Returns user info for given users
 */
export function getUserInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UserInfoResponseDTO> {
	return callMethod('getUserInfo', request);
}

/**
 * Returns presence info for given users
 */
export function getUsersPresenceInfo(request: MessageTypes.UserInfoRequestDTO): Promise<MessageTypes.UsersPresenceInfoResponseDTO> {
	return callMethod('getUsersPresenceInfo', request);
}

/**
 * Maps a VCS username/email to a Hub account
 */
export function bindVcsUsername(request: MessageTypes.BindVcsUsernameRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('bindVcsUsername', request);
}

/**
 * Returns the list of projects the specified user contributed to
 */
export function getUserProjects(request: MessageTypes.UserProjectsRequestDTO): Promise<MessageTypes.UserProjectsResponseDTO> {
	return callMethod('getUserProjects', request);
}

/**
 * Sets or clears a user absence
 */
export function setUserAbsence(request: MessageTypes.UserAbsenceRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setUserAbsence', request);
}

/**
 * Returns the value of a user setting by name
 */
export function getUserSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return callMethod('getUserSetting', request);
}

/**
 * Updates the value of a user setting by name
 */
export function setUserSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setUserSetting', request);
}

/**
 * Returns the value of a cluster-wide setting by name
 */
export function getClusterSetting(request: MessageTypes.GetSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return callMethod('getClusterSetting', request);
}

/**
 * Updates the value of a cluster-wide setting by name
 */
export function setClusterSetting(request: MessageTypes.SetSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setClusterSetting', request);
}

/**
 * Sets the server motto
 */
export function setMotto(request: MessageTypes.SetMottoRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setMotto', request);
}

/**
 * Returns the value of a project setting by name
 */
export function getProjectSetting(request: MessageTypes.GetProjectSettingRequestDTO): Promise<MessageTypes.GetSettingResponseDTO> {
	return callMethod('getProjectSetting', request);
}

/**
 * Updates the value of a project setting by name
 */
export function setProjectSetting(request: MessageTypes.SetProjectSettingRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setProjectSetting', request);
}

/**
 * Creates a project
 */
export function createProject(request: MessageTypes.CreateProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('createProject', request);
}

/**
 * Loads project settings
 */
export function loadProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectSettingsDTO> {
	return callMethod('loadProject', request);
}

/**
 * Updates project settings
 */
export function editProject(request: MessageTypes.EditProjectRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('editProject', request);
}

/**
 * Deletes a project
 */
export function deleteProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('deleteProject', request);
}

/**
 * Completely reset a project
 */
export function resetProject(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('resetProject', request);
}

/**
 * Loads project settings
 */
export function getProjectConfigurationParameters(): Promise<MessageTypes.ProjectConfigurationResponseDTO> {
	return callMethod('getProjectConfigurationParameters');
}

/**
 * Loads VCS Hosting services
 */
export function getVcsHostingServices(request: MessageTypes.VcsHostingRequestDTO): Promise<MessageTypes.VcsHostingResponseDTO> {
	return callMethod('getVcsHostingServices', request);
}

/**
 * Creates/updates a discussion label in a project
 */
export function createOrEditLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return callMethod('createOrEditLabel', request);
}

/**
 * Creates/updates a review label in a project
 */
export function createOrEditReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.LabelDTO> {
	return callMethod('createOrEditReviewLabel', request);
}

/**
 * Hides predefined discussion labels in a project
 */
export function hidePredefinedLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('hidePredefinedLabels', request);
}

/**
 * Hides predefined review labels in a project
 */
export function hidePredefinedReviewLabels(request: MessageTypes.HidePredefinedLabelsRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('hidePredefinedReviewLabels', request);
}

/**
 * Deletes a discussion label from a project
 */
export function deleteLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('deleteLabel', request);
}

/**
 * Deletes a review label from a project
 */
export function deleteReviewLabel(request: MessageTypes.EditLabelRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('deleteReviewLabel', request);
}

/**
 * Merges two or more discussion labels into one
 */
export function mergeLabels(request: MessageTypes.EditLabelsRequestDTO): Promise<MessageTypes.LabelDTO> {
	return callMethod('mergeLabels', request);
}

/**
 * Checks connection to a given VCS repository
 */
export function testVcsConnection(request: MessageTypes.TestConnectionRequestDTO): Promise<MessageTypes.TestConnectionResponseDTO> {
	return callMethod('testVcsConnection', request);
}

/**
 * Checks availability of a given POP3 mailbox
 */
export function testPOP3Mailbox(request: MessageTypes.TestPOP3MailboxRequestDTO): Promise<MessageTypes.TestPOP3MailboxResponseDTO> {
	return callMethod('testPOP3Mailbox', request);
}

/**
 * Checks if server is in read-only mode
 */
export function getReadOnlyMode(): Promise<MessageTypes.ReadOnlyModeDTO> {
	return callMethod('getReadOnlyMode');
}

/**
 * Enables/disables the read-only mode
 */
export function setReadOnlyMode(request: MessageTypes.ReadOnlyModeDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('setReadOnlyMode', request);
}

/**
 * Returns all roles available in Hub
 */
export function getAllRoles(): Promise<MessageTypes.AllRolesResponseDTO> {
	return callMethod('getAllRoles');
}

/**
 * Returns users that have any access to the project and role keys associated with each user
 */
export function getUsersRoles(request: MessageTypes.UsersRolesRequestDTO): Promise<MessageTypes.UsersRolesResponseDTO> {
	return callMethod('getUsersRoles', request);
}

/**
 * Adds a user role
 */
export function addUserRole(request: MessageTypes.AddRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('addUserRole', request);
}

/**
 * Deletes a user role (not the role itself, but the association)
 */
export function deleteUserRole(request: MessageTypes.DeleteRoleRequestDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('deleteUserRole', request);
}

/**
 * Searches for user in Hub by an email, and sends an invitation if not found
 */
export function inviteUser(request: MessageTypes.InviteUserRequestDTO): Promise<MessageTypes.InviteUserResponseDTO> {
	return callMethod('inviteUser', request);
}

/**
 * Exports user-generated data - reviews, discussions, settings
 */
export function exportData(): Promise<MessageTypes.ExportDataResponseDTO> {
	return callMethod('exportData');
}

/**
 * Returns project activity distribution over time, i.e. the number of commits per time period
 */
export function getProjectActivity(request: MessageTypes.ProjectActivityRequestDTO): Promise<MessageTypes.ProjectActivityDTO> {
	return callMethod('getProjectActivity', request);
}

/**
 * Returns contributors distribution over time, i.e. the number of commits per time period per committer
 */
export function getContributorsDistribution(request: MessageTypes.ContributorsDistributionRequestDTO): Promise<MessageTypes.ContributorsDistributionDTO> {
	return callMethod('getContributorsDistribution', request);
}

/**
 * Returns commits distribution in a given date range over all committers and modules
 */
export function getResponsibilityDistribution(request: MessageTypes.ResponsibilityDistributionRequestDTO): Promise<MessageTypes.ResponsibilityDistributionDTO> {
	return callMethod('getResponsibilityDistribution', request);
}

/**
 * Returns all committers throughout the project history
 */
export function getProjectCommitters(request: MessageTypes.ProjectIdDTO): Promise<MessageTypes.ProjectCommittersDTO> {
	return callMethod('getProjectCommitters', request);
}

/**
 * Returns project activity distribution over time, i.e. the number of commits per time period for a specified set of committers
 */
export function getUserActivity(request: MessageTypes.UserActivityRequestDTO): Promise<MessageTypes.UserActivityDTO> {
	return callMethod('getUserActivity', request);
}

/**
 * Returns per-module activity distribution in the project
 */
export function getModulesDistribution(request: MessageTypes.ModulesDistributionRequestDTO): Promise<MessageTypes.ModulesDistributionDTO> {
	return callMethod('getModulesDistribution', request);
}

/**
 * Returns the summary for the specified date range and set of committers: total number of commits, number of commits that aren't part of any module, total number of modules changed
 */
export function getCommitsSummary(request: MessageTypes.CommitsSummaryRequestDTO): Promise<MessageTypes.CommitsSummaryDTO> {
	return callMethod('getCommitsSummary', request);
}

/**
 * Returns the revisions in the specified module, in the specified date range and for the specified committers
 */
export function getCommitsDetails(request: MessageTypes.CommitsDetailsRequestDTO): Promise<MessageTypes.CommitsDetailsDTO> {
	return callMethod('getCommitsDetails', request);
}

/**
 * Returns the data required to display an animated chart of distribution of individual files in project across "edits - age" plane
 */
export function getFileHistoryChart(request: MessageTypes.FileHistoryChartRequestDTO): Promise<MessageTypes.FileHistoryChartDTO> {
	return callMethod('getFileHistoryChart', request);
}

/**
 * Returns the list of files in a project and their content sizes required to build the interactive treemap chart
 */
export function getProjectTreeMap(request: MessageTypes.ProjectTreeMapRequestDTO): Promise<MessageTypes.ProjectTreeMapDTO> {
	return callMethod('getProjectTreeMap', request);
}

/**
 * Returns the activity pulse for a specified project
 */
export function getProjectPulse(request: MessageTypes.ProjectPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
	return callMethod('getProjectPulse', request);
}

/**
 * Returns the activity pulse of a given user across all projects (`allValues` time series is always empty)
 */
export function getUserPulse(request: MessageTypes.UserPulseRequestDTO): Promise<MessageTypes.PulseResponseDTO> {
	return callMethod('getUserPulse', request);
}

/**
 * Returns the general review statistics in the project
 */
export function getReviewStatistics(request: MessageTypes.ReviewStatisticsRequestDTO): Promise<MessageTypes.ReviewStatisticsDTO> {
	return callMethod('getReviewStatistics', request);
}

/**
 * Returns the number of revisions covered by reviews in the project
 */
export function getReviewCoverage(request: MessageTypes.ReviewCoverageRequestDTO): Promise<MessageTypes.ReviewCoverageDTO> {
	return callMethod('getReviewCoverage', request);
}

/**
 * Returns the time distribution of reviews and review iterations
 */
export function getReviewTimeStatistics(request: MessageTypes.ReviewTimeStatisticsRequestDTO): Promise<MessageTypes.ReviewTimeStatisticsDTO> {
	return callMethod('getReviewTimeStatistics', request);
}

/**
 * Returns review activity graph for the project
 */
export function getReviewersGraph(request: MessageTypes.ReviewersGraphRequestDTO): Promise<MessageTypes.ReviewersGraphDTO> {
	return callMethod('getReviewersGraph', request);
}

/**
 * Updates user timezone
 */
export function updateUserTimezone(request: MessageTypes.UpdateUserTimezoneDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('updateUserTimezone', request);
}

/**
 * Updates the time when the user last saw the list of his/her achievements
 */
export function updateAchievementsLastSeen(request: MessageTypes.UserActionNotificationDTO): Promise<MessageTypes.VoidMessage> {
	return callMethod('updateAchievementsLastSeen', request);
}

/**
 * Returns the list of achievements the user has unlocked
 */
export function getUnlockedUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
	return callMethod('getUnlockedUserAchievements', request);
}

/**
 * Returns a count of unread achievements the user has unlocked
 */
export function getUnreadUnlockedUserAchievementsCount(): Promise<MessageTypes.UserAchievementsCountDTO> {
	return callMethod('getUnreadUnlockedUserAchievementsCount');
}

/**
 * Returns the list of all achievements with information about whether the achievement was unlocked by the user or not
 */
export function getUserAchievements(request: MessageTypes.UserAchievementsRequestDTO): Promise<MessageTypes.AchievementsListDTO> {
	return callMethod('getUserAchievements', request);
}

/**
 * Returns the list of available issue trackers
 */
export function getAvailableIssueTrackerProviders(): Promise<MessageTypes.IssueTrackerProvidersListDTO> {
	return callMethod('getAvailableIssueTrackerProviders');
}

/**
 * Returns detailed issue information
 */
export function getIssueInfo(request: MessageTypes.IssueInfoRequestDTO): Promise<MessageTypes.IssueInfoDTO> {
	return callMethod('getIssueInfo', request);
}

/**
 * Creates an issue from the discussion in a given issue tracker
 */
export function createIssueFromDiscussion(request: MessageTypes.CreateIssueFromDiscussionRequestDTO): Promise<MessageTypes.IssueIdDTO> {
	return callMethod('createIssueFromDiscussion', request);
}

/**
 * Creates an issue from the review in a given issue tracker
 */
export function createIssueFromReview(request: MessageTypes.CreateIssueFromReviewRequestDTO): Promise<MessageTypes.IssueIdDTO> {
	return callMethod('createIssueFromReview', request);
}
