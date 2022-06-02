package model


type TaggedPost struct {
	ID string `json:"id"`
	UserID string `json:"user_id"`
	PostID string `json:"post_id"`
	tableName struct{}`pg:"TaggedPost"`
}
