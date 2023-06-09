"""working

Revision ID: d15345f18f1f
Revises: 844fe5a9f70d
Create Date: 2023-05-31 01:52:26.320621

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd15345f18f1f'
down_revision = '844fe5a9f70d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('post_tags')
    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('content',
               existing_type=sa.VARCHAR(),
               type_=sa.Text(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('posts', schema=None) as batch_op:
        batch_op.alter_column('content',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(),
               existing_nullable=False)

    op.create_table('post_tags',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('post_id', sa.INTEGER(), nullable=False),
    sa.Column('tag_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], ),
    sa.ForeignKeyConstraint(['tag_id'], ['tags.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###
